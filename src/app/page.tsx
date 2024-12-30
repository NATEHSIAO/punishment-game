'use client';

import { useState } from 'react';
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
    const withPlaceholders = template.replace(/\{([^}]+)\}/g, (match) => {
      return `<motion-variable class="text-red-500 font-bold">???</motion-variable>`;
    });
    setDisplayedText(withPlaceholders);
    setShouldAnimate(true);
  };

  const revealVariables = (template: string) => {
    let result = template;
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
    
    const selectedCategory = getRandomItem(gameContent.categories);
    if (!selectedCategory) {
      setIsSpinning(false);
      return;
    }

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
    const parts = displayedText.split(/<motion-variable|<\/motion-variable>/);
    const variables = displayedText.match(/<motion-variable[^>]*>(.*?)<\/motion-variable>/g) || [];
    let variableIndex = 0;
    
    return (
      <div className="text-center">
        {parts.map((part, partIndex) => {
          if (partIndex % 2 === 0) {
            return <span key={partIndex}>{part}</span>;
          } else {
            const variableMatch = variables[variableIndex]?.match(/<motion-variable[^>]*>(.*?)<\/motion-variable>/);
            const variableContent = variableMatch ? variableMatch[1] : '';
            const classMatch = variables[variableIndex]?.match(/class="([^"]*)"/);
            const className = classMatch ? classMatch[1] : '';
            variableIndex++;
            
            return (
              <motion.span
                key={partIndex}
                className={`${className} inline-block mx-1`}
                animate={shouldAnimate ? "animate" : ""}
                variants={variableAnimation}
              >
                {variableContent}
              </motion.span>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          派對遊戲懲罰生成器
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-2xl font-bold text-gray-800 text-center mb-6">
            {currentCategory}
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8 min-h-[120px] flex items-center justify-center">
            <div className="text-xl text-gray-700">
              {renderTextWithAnimation()}
            </div>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={drawQuestion}
              disabled={isSpinning || isSpinningVariables}
              className={`
                w-40 h-40 
                rounded-full 
                text-2xl font-bold text-white 
                transition-colors duration-200
                ${isSpinning || isSpinningVariables
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-500 hover:bg-red-600 active:bg-red-700 shadow-lg'
                }
              `}
            >
              {isSpinning || isSpinningVariables ? '抽取中...' : '抽懲罰'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 