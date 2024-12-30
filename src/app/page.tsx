'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gameContent, GameContent } from './data';

interface Category {
  id: string;
  name: string;
  templates: string[];
}

const variableAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      repeat: 5,
      repeatType: "mirror" as const
    }
  }
};

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSpinningVariables, setIsSpinningVariables] = useState(false);
  const [lastCategoryId, setLastCategoryId] = useState<string>('');
  const [currentCategory, setCurrentCategory] = useState<string>('運動題');
  const [displayedText, setDisplayedText] = useState<string>('點擊抽懲罰開始遊戲');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const getRandomItem = <T extends any>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const processTemplate = (template: string) => {
    const parts = template.split('，');
    const firstLine = parts[0];
    const secondLine = parts.slice(1).join('，');

    const withPlaceholders = `${firstLine}\n${secondLine}`.replace(/\{([^}]+)\}/g, (match) => {
      return `<motion-variable class="text-red-500 font-bold">???</motion-variable>`;
    });
    setDisplayedText(withPlaceholders);
    setShouldAnimate(true);
  };

  const revealVariables = (template: string) => {
    const parts = template.split('，');
    const firstLine = parts[0];
    const secondLine = parts.slice(1).join('，');
    
    let result = `${firstLine}\n${secondLine}`;
    const variables = template.match(/\{([^}]+)\}/g) || [];
    
    variables.forEach(variable => {
      const variableName = variable.slice(1, -1) as keyof GameContent['variables'];
      const values = gameContent.variables[variableName];
      if (values) {
        const randomValue = getRandomItem(values);
        result = result.replace(
          variable,
          `<motion-variable class="text-red-500 font-bold">${randomValue}</motion-variable>`
        );
      }
    });

    setDisplayedText(result);
    setShouldAnimate(true);
    
    setTimeout(() => {
      setShouldAnimate(false);
    }, 3000);
  };

  const drawQuestion = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    let selectedCategory: Category | undefined;
    
    const spinDuration = 1500;
    const spinInterval = 100;
    let spinCount = 0;
    
    const spinTimer = setInterval(() => {
      const randomCategory = getRandomItem(gameContent.categories);
      if (!randomCategory) return;
      setCurrentCategory(randomCategory.name);
      const randomTemplate = getRandomItem(randomCategory.templates);
      if (!randomTemplate) return;
      processTemplate(randomTemplate);
      spinCount++;
      
      if (spinCount * spinInterval >= spinDuration) {
        clearInterval(spinTimer);
        if (!selectedCategory) return;
        
        setCurrentCategory(selectedCategory.name);
        const template = getRandomItem(selectedCategory.templates);
        if (!template) return;
        setCurrentQuestion(template);
        processTemplate(template);
        setLastCategoryId(selectedCategory.id);
        setIsSpinning(false);
        
        setIsSpinningVariables(true);
        setTimeout(() => {
          if (!template) return;
          revealVariables(template);
          setIsSpinningVariables(false);
        }, 1700);
      }
    }, spinInterval);
  };

  const renderTextWithAnimation = () => {
    const lines = displayedText.split('\n');
    const parts = lines.map(line => line.split(/<motion-variable|<\/motion-variable>/));
    const variables = displayedText.match(/<motion-variable[^>]*>(.*?)<\/motion-variable>/g) || [];
    let variableIndex = 0;
    
    return (
      <div className="flex flex-col gap-2">
        {parts.map((lineParts, lineIndex) => (
          <div key={lineIndex}>
            {lineParts.map((part, partIndex) => {
              if (partIndex % 2 === 0) {
                return <span key={partIndex} dangerouslySetInnerHTML={{ __html: part }} />;
              } else {
                const variableMatch = variables[variableIndex].match(/<motion-variable[^>]*>(.*?)<\/motion-variable>/);
                const variableContent = variableMatch ? variableMatch[1] : '';
                const classMatch = variables[variableIndex].match(/class="([^"]*)"/);
                const className = classMatch ? classMatch[1] : '';
                variableIndex++;
                
                return (
                  <motion.span
                    key={partIndex}
                    className={className}
                    animate={shouldAnimate ? "animate" : ""}
                    variants={variableAnimation}
                  >
                    {variableContent}
                  </motion.span>
                );
              }
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 flex flex-col items-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-16">
          派對遊戲懲罰生成器
        </h1>

        <div className="w-full mb-16">
          <div className="text-2xl font-bold text-center text-black mb-4">
            {currentCategory}
          </div>
          <div className="bg-[#FFE4C4] rounded-lg p-6 text-xl md:text-2xl text-center font-medium min-h-[120px] flex items-center justify-center whitespace-pre-wrap break-words leading-relaxed max-w-[600px] mx-auto">
            {renderTextWithAnimation()}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={drawQuestion}
          disabled={isSpinning || isSpinningVariables}
          className={`w-48 h-48 rounded-full text-3xl font-bold text-white ${
            isSpinning || isSpinningVariables
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 shadow-lg'
          }`}
        >
          {isSpinning || isSpinningVariables ? '抽取中...' : '抽懲罰'}
        </motion.button>
      </div>
    </main>
  );
} 