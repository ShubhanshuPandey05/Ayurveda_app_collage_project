import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Utensils, CheckCircle, XCircle, Sunrise, Sun, Moon } from 'lucide-react';

export function DietChart() {
  const [prakritiResult, setPrakritiResult] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

  useEffect(() => {
    const savedResult = localStorage.getItem('prakritiResult');
    if (savedResult) {
      setPrakritiResult(JSON.parse(savedResult));
    }
  }, []);

  const getDietRecommendations = (primaryDosha) => {
    const dietData = {
      vata: {
        name: "Vata",
        color: "blue",
        description: "Vata types benefit from warm, cooked, and grounding foods that provide stability and nourishment.",
        meals: {
          breakfast: {
            recommended: [
              "Warm oatmeal with ghee and honey",
              "Cooked apples with cinnamon",
              "Warm milk with turmeric",
              "Rice pudding with cardamom",
              "Banana with warm milk"
            ],
            avoid: [
              "Cold cereals",
              "Raw fruits",
              "Cold drinks",
              "Dry toast",
              "Iced beverages"
            ]
          },
          lunch: {
            recommended: [
              "Warm vegetable soup",
              "Cooked rice with ghee",
              "Steamed vegetables",
              "Lentil soup with warming spices",
              "Cooked quinoa with vegetables"
            ],
            avoid: [
              "Cold salads",
              "Raw vegetables",
              "Dry foods",
              "Cold sandwiches",
              "Frozen meals"
            ]
          },
          dinner: {
            recommended: [
              "Warm khichdi (rice and lentils)",
              "Cooked vegetables with ghee",
              "Warm soup",
              "Steamed rice with vegetables",
              "Warm herbal tea"
            ],
            avoid: [
              "Heavy fried foods",
              "Cold foods",
              "Raw vegetables",
              "Dry foods",
              "Cold beverages"
            ]
          },
          snacks: {
            recommended: [
              "Warm nuts (almonds, walnuts)",
              "Cooked fruits",
              "Warm herbal tea",
              "Ghee with honey",
              "Warm milk with spices"
            ],
            avoid: [
              "Cold fruits",
              "Dry crackers",
              "Cold beverages",
              "Raw vegetables",
              "Frozen foods"
            ]
          }
        }
      },
      pitta: {
        name: "Pitta",
        color: "orange",
        description: "Pitta types thrive on cooling, sweet, bitter, and astringent foods that help balance their fiery nature.",
        meals: {
          breakfast: {
            recommended: [
              "Cooling oatmeal with coconut milk",
              "Sweet fruits (mango, pear)",
              "Coconut water",
              "Cooling herbal tea",
              "Sweet rice pudding"
            ],
            avoid: [
              "Spicy foods",
              "Hot beverages",
              "Sour fruits",
              "Heavy fried foods",
              "Excessive salt"
            ]
          },
          lunch: {
            recommended: [
              "Cooling vegetable salad",
              "Basmati rice with ghee",
              "Cucumber and mint raita",
              "Sweet and bitter vegetables",
              "Coconut-based dishes"
            ],
            avoid: [
              "Spicy curries",
              "Hot peppers",
              "Sour foods",
              "Excessive oil",
              "Very hot foods"
            ]
          },
          dinner: {
            recommended: [
              "Light vegetable soup",
              "Cooling grains (rice, barley)",
              "Sweet vegetables",
              "Mint and coriander dishes",
              "Cooling herbal tea"
            ],
            avoid: [
              "Heavy fried foods",
              "Spicy dishes",
              "Hot beverages",
              "Sour foods",
              "Excessive protein"
            ]
          },
          snacks: {
            recommended: [
              "Sweet fruits",
              "Coconut water",
              "Cooling nuts (coconut, almonds)",
              "Sweet herbal tea",
              "Cucumber slices"
            ],
            avoid: [
              "Spicy snacks",
              "Hot beverages",
              "Sour fruits",
              "Salty foods",
              "Hot spices"
            ]
          }
        }
      },
      kapha: {
        name: "Kapha",
        color: "green",
        description: "Kapha types benefit from light, dry, warm, and stimulating foods that help balance their heavy nature.",
        meals: {
          breakfast: {
            recommended: [
              "Light fruit (apples, pears)",
              "Honey with warm water",
              "Light tea with ginger",
              "Dry fruits (raisins, figs)",
              "Light toast with honey"
            ],
            avoid: [
              "Heavy dairy",
              "Sweet pastries",
              "Cold foods",
              "Heavy grains",
              "Excessive sweets"
            ]
          },
          lunch: {
            recommended: [
              "Light vegetable soup",
              "Barley or quinoa",
              "Spicy vegetables",
              "Light legumes",
              "Warming spices"
            ],
            avoid: [
              "Heavy fried foods",
              "Sweet foods",
              "Cold foods",
              "Excessive oil",
              "Heavy dairy"
            ]
          },
          dinner: {
            recommended: [
              "Light vegetable dishes",
              "Warming spices (ginger, pepper)",
              "Light grains",
              "Steamed vegetables",
              "Warming herbal tea"
            ],
            avoid: [
              "Heavy foods",
              "Sweet desserts",
              "Cold foods",
              "Excessive oil",
              "Heavy dairy"
            ]
          },
          snacks: {
            recommended: [
              "Light fruits",
              "Warming spices",
              "Light tea",
              "Dry fruits",
              "Light nuts"
            ],
            avoid: [
              "Sweet snacks",
              "Heavy foods",
              "Cold beverages",
              "Excessive sweets",
              "Heavy dairy"
            ]
          }
        }
      }
    };
    return dietData[primaryDosha];
  };

  const getMealIcon = (meal) => {
    switch (meal) {
      case 'breakfast':
        return <Sunrise className="w-5 h-5" />;
      case 'lunch':
        return <Sun className="w-5 h-5" />;
      case 'dinner':
        return <Moon className="w-5 h-5" />;
      case 'snacks':
        return <Utensils className="w-5 h-5" />;
      default:
        return <Utensils className="w-5 h-5" />;
    }
  };

  if (!prakritiResult) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Personalized Diet Chart</h1>
          <p className="text-gray-600">Complete your Prakriti analysis first to get personalized diet recommendations</p>
        </div>
        <Card>
          <CardContent className="text-center py-12">
            <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Please complete the Prakriti analysis to view your personalized diet recommendations.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const dietData = getDietRecommendations(prakritiResult.primaryDosha);
  const meals = ['breakfast', 'lunch', 'dinner', 'snacks'];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Personalized Diet Chart</h1>
        <p className="text-gray-600">Diet recommendations for {dietData.name} dosha</p>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-green-700">
            <Utensils className="w-5 h-5 mr-2" />
            {dietData.name} Dosha Diet Guidelines
          </CardTitle>
          <p className="text-gray-700">{dietData.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {meals.map((meal) => (
              <Button
                key={meal}
                onClick={() => setSelectedMeal(meal)}
                variant={selectedMeal === meal ? "default" : "outline"}
                className={`flex items-center space-x-2 capitalize ${
                  selectedMeal === meal ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
              >
                {getMealIcon(meal)}
                <span>{meal}</span>
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Recommended Foods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dietData.meals[selectedMeal].recommended.map((food, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{food}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <XCircle className="w-5 h-5 mr-2" />
                  Foods to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dietData.meals[selectedMeal].avoid.map((food, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{food}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-green-700">General Dietary Tips for {dietData.name} Dosha</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-700">Best Practices:</h4>
              <ul className="space-y-2 text-sm">
                {dietData.name === 'Vata' && (
                  <>
                    <li>• Eat warm, cooked foods</li>
                    <li>• Include healthy fats like ghee</li>
                    <li>• Eat at regular times</li>
                    <li>• Stay hydrated with warm beverages</li>
                    <li>• Avoid cold and dry foods</li>
                  </>
                )}
                {dietData.name === 'Pitta' && (
                  <>
                    <li>• Choose cooling and sweet foods</li>
                    <li>• Eat at moderate temperatures</li>
                    <li>• Include bitter and astringent tastes</li>
                    <li>• Avoid spicy and sour foods</li>
                    <li>• Stay hydrated with cool beverages</li>
                  </>
                )}
                {dietData.name === 'Kapha' && (
                  <>
                    <li>• Eat light and dry foods</li>
                    <li>• Include warming spices</li>
                    <li>• Avoid heavy and sweet foods</li>
                    <li>• Eat smaller portions</li>
                    <li>• Stay active after meals</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-700">Meal Timing:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Breakfast: 7-8 AM</li>
                <li>• Lunch: 12-1 PM (largest meal)</li>
                <li>• Dinner: 6-7 PM (light meal)</li>
                <li>• Avoid eating after 8 PM</li>
                <li>• Maintain 3-4 hours between meals</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 