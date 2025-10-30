import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Brain, CheckCircle, Wind, Flame, Droplets } from 'lucide-react';

export function PrakritiAnalysis() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [prakritiResult, setPrakritiResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is your body frame?",
      options: [
        { text: "Thin and lean", dosha: "vata" },
        { text: "Medium build", dosha: "pitta" },
        { text: "Large and sturdy", dosha: "kapha" }
      ]
    },
    {
      id: 2,
      question: "How would you describe your skin?",
      options: [
        { text: "Dry and rough", dosha: "vata" },
        { text: "Warm and reddish", dosha: "pitta" },
        { text: "Thick and oily", dosha: "kapha" }
      ]
    },
    {
      id: 3,
      question: "What is your typical appetite like?",
      options: [
        { text: "Variable - sometimes hungry, sometimes not", dosha: "vata" },
        { text: "Strong and intense", dosha: "pitta" },
        { text: "Steady and moderate", dosha: "kapha" }
      ]
    },
    {
      id: 4,
      question: "How do you typically sleep?",
      options: [
        { text: "Light sleeper, easily disturbed", dosha: "vata" },
        { text: "Moderate sleep, wake up hot", dosha: "pitta" },
        { text: "Deep sleep, hard to wake up", dosha: "kapha" }
      ]
    },
    {
      id: 5,
      question: "What is your typical energy level?",
      options: [
        { text: "Variable energy, bursts of activity", dosha: "vata" },
        { text: "Intense energy, goal-oriented", dosha: "pitta" },
        { text: "Steady energy, slow to start", dosha: "kapha" }
      ]
    },
    {
      id: 6,
      question: "How do you handle stress?",
      options: [
        { text: "Anxious and worried", dosha: "vata" },
        { text: "Irritable and intense", dosha: "pitta" },
        { text: "Calm and steady", dosha: "kapha" }
      ]
    },
    {
      id: 7,
      question: "What type of weather do you prefer?",
      options: [
        { text: "Warm and humid", dosha: "vata" },
        { text: "Cool and dry", dosha: "pitta" },
        { text: "Warm and dry", dosha: "kapha" }
      ]
    },
    {
      id: 8,
      question: "How do you typically speak?",
      options: [
        { text: "Fast and talkative", dosha: "vata" },
        { text: "Sharp and precise", dosha: "pitta" },
        { text: "Slow and thoughtful", dosha: "kapha" }
      ]
    },
    {
      id: 9,
      question: "What is your memory like?",
      options: [
        { text: "Quick to learn, quick to forget", dosha: "vata" },
        { text: "Sharp and focused", dosha: "pitta" },
        { text: "Slow to learn, excellent retention", dosha: "kapha" }
      ]
    },
    {
      id: 10,
      question: "How do you typically spend money?",
      options: [
        { text: "Impulsive spender", dosha: "vata" },
        { text: "Calculated and purposeful", dosha: "pitta" },
        { text: "Conservative and saving", dosha: "kapha" }
      ]
    }
  ];

  useEffect(() => {
    const savedAnswers = localStorage.getItem('prakritiAnswers');
    const savedResult = localStorage.getItem('prakritiResult');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedResult) {
      setPrakritiResult(JSON.parse(savedResult));
      setShowResults(true);
    }
  }, []);

  const handleAnswer = (questionId, dosha) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: dosha
    }));
  };

  const calculatePrakriti = () => {
    const doshaCounts = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(answers).forEach(dosha => {
      doshaCounts[dosha]++;
    });

    const total = Object.values(doshaCounts).reduce((sum, count) => sum + count, 0);
    const percentages = {
      vata: Math.round((doshaCounts.vata / total) * 100),
      pitta: Math.round((doshaCounts.pitta / total) * 100),
      kapha: Math.round((doshaCounts.kapha / total) * 100)
    };

    // Determine primary and secondary doshas
    const sortedDoshas = Object.entries(percentages).sort(([,a], [,b]) => b - a);
    const primaryDosha = sortedDoshas[0][0];
    const secondaryDosha = sortedDoshas[1][0];

    const result = {
      percentages,
      primaryDosha,
      secondaryDosha,
      type: `${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)}-${secondaryDosha.charAt(0).toUpperCase() + secondaryDosha.slice(1)}`
    };

    setPrakritiResult(result);
    localStorage.setItem('prakritiAnswers', JSON.stringify(answers));
    localStorage.setItem('prakritiResult', JSON.stringify(result));
    setShowResults(true);
  };

  const getDoshaInfo = (dosha) => {
    const doshaInfo = {
      vata: {
        name: "Vata",
        element: "Air & Space",
        color: "blue",
        icon: Wind,
        characteristics: [
          "Creative and artistic",
          "Quick-thinking and adaptable",
          "Variable energy levels",
          "Light sleeper",
          "Dry skin and hair",
          "Irregular appetite"
        ],
        recommendations: [
          "Follow a regular daily routine",
          "Eat warm, cooked foods",
          "Practice gentle yoga and meditation",
          "Stay warm and avoid cold foods",
          "Get adequate sleep"
        ]
      },
      pitta: {
        name: "Pitta",
        element: "Fire & Water",
        color: "orange",
        icon: Flame,
        characteristics: [
          "Intelligent and focused",
          "Goal-oriented and determined",
          "Strong appetite",
          "Medium build",
          "Warm body temperature",
          "Sharp memory"
        ],
        recommendations: [
          "Stay cool and avoid excessive heat",
          "Eat cooling foods",
          "Practice calming activities",
          "Avoid spicy and hot foods",
          "Maintain work-life balance"
        ]
      },
      kapha: {
        name: "Kapha",
        element: "Earth & Water",
        color: "green",
        icon: Droplets,
        characteristics: [
          "Strong and caring",
          "Patient and steady",
          "Deep sleeper",
          "Thick skin and hair",
          "Steady appetite",
          "Excellent memory"
        ],
        recommendations: [
          "Stay active and exercise regularly",
          "Eat light, dry foods",
          "Avoid heavy, oily foods",
          "Wake up early",
          "Engage in stimulating activities"
        ]
      }
    };
    return doshaInfo[dosha];
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setPrakritiResult(null);
    localStorage.removeItem('prakritiAnswers');
    localStorage.removeItem('prakritiResult');
  };

  if (showResults && prakritiResult) {
    const primaryInfo = getDoshaInfo(prakritiResult.primaryDosha);
    const secondaryInfo = getDoshaInfo(prakritiResult.secondaryDosha);

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Your Prakriti Analysis</h1>
          <p className="text-gray-600">Discover your unique body constitution</p>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-700">
              Your Dosha Type: {prakritiResult.type}
            </CardTitle>
            <CardDescription>
              Primary: {primaryInfo.name} ({prakritiResult.percentages[prakritiResult.primaryDosha]}%) | 
              Secondary: {secondaryInfo.name} ({prakritiResult.percentages[prakritiResult.secondaryDosha]}%)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <primaryInfo.icon className="w-5 h-5 mr-2" />
                    Primary: {primaryInfo.name} Dosha
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Element: {primaryInfo.element}</p>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="text-sm space-y-1">
                    {primaryInfo.characteristics.map((char, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <secondaryInfo.icon className="w-5 h-5 mr-2" />
                    Secondary: {secondaryInfo.name} Dosha
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Element: {secondaryInfo.element}</p>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="text-sm space-y-1">
                    {secondaryInfo.characteristics.slice(0, 4).map((char, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">For {primaryInfo.name} Balance:</h4>
                    <ul className="text-sm space-y-1">
                      {primaryInfo.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">For {secondaryInfo.name} Balance:</h4>
                    <ul className="text-sm space-y-1">
                      {secondaryInfo.recommendations.slice(0, 3).map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4">
              <Button onClick={resetAssessment} variant="outline">
                Retake Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ?.id];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Prakriti Analysis</h1>
        <p className="text-gray-600">Answer these questions to discover your unique body constitution</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-green-700">
              <Brain className="w-5 h-5 mr-2" />
              Question {currentQuestion + 1} of {questions.length}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h3>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQ.id, option.dosha)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    isAnswered === option.dosha
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={calculatePrakriti}
                disabled={Object.keys(answers).length < questions.length}
                className="bg-green-600 hover:bg-green-700"
              >
                Get Results
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                disabled={!isAnswered}
                className="bg-green-600 hover:bg-green-700"
              >
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 