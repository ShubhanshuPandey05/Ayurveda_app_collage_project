import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Clock, Sunrise, Sun, Moon, Activity, Coffee, Utensils, Bed } from 'lucide-react';

export function DailySchedule() {
  const [prakritiResult, setPrakritiResult] = useState(null);
  const [selectedTime, setSelectedTime] = useState('morning');

  useEffect(() => {
    const savedResult = localStorage.getItem('prakritiResult');
    if (savedResult) {
      setPrakritiResult(JSON.parse(savedResult));
    }
  }, []);

  const getScheduleRecommendations = (primaryDosha) => {
    const scheduleData = {
      vata: {
        name: "Vata",
        description: "Vata types benefit from a structured, calming routine that provides stability and grounding.",
        schedule: {
          morning: {
            time: "6:00 AM - 10:00 AM",
            activities: [
              { time: "6:00 AM", activity: "Wake up gently", icon: Sunrise, description: "Wake up naturally, avoid alarm clocks" },
              { time: "6:15 AM", activity: "Oil massage (Abhyanga)", icon: Activity, description: "Warm sesame oil massage for grounding" },
              { time: "6:45 AM", activity: "Gentle yoga", icon: Activity, description: "Slow, grounding poses like child's pose, tree pose" },
              { time: "7:15 AM", activity: "Meditation", icon: Activity, description: "10-15 minutes of calming meditation" },
              { time: "7:45 AM", activity: "Warm breakfast", icon: Utensils, description: "Warm, cooked foods with ghee" },
              { time: "8:30 AM", activity: "Begin work", icon: Activity, description: "Start with creative tasks when energy is high" }
            ]
          },
          afternoon: {
            time: "10:00 AM - 2:00 PM",
            activities: [
              { time: "10:00 AM", activity: "Light snack", icon: Coffee, description: "Warm herbal tea with honey" },
              { time: "12:00 PM", activity: "Lunch", icon: Utensils, description: "Warm, nourishing meal - largest of the day" },
              { time: "1:00 PM", activity: "Rest period", icon: Activity, description: "Short rest or gentle walking" }
            ]
          },
          evening: {
            time: "2:00 PM - 6:00 PM",
            activities: [
              { time: "2:00 PM", activity: "Continue work", icon: Activity, description: "Focus on routine tasks" },
              { time: "4:00 PM", activity: "Light exercise", icon: Activity, description: "Gentle walking or swimming" },
              { time: "5:00 PM", activity: "Evening routine", icon: Activity, description: "Prepare for dinner and relaxation" }
            ]
          },
          night: {
            time: "6:00 PM - 10:00 PM",
            activities: [
              { time: "6:00 PM", activity: "Light dinner", icon: Utensils, description: "Warm, light meal" },
              { time: "7:00 PM", activity: "Evening walk", icon: Activity, description: "Gentle stroll for digestion" },
              { time: "8:00 PM", activity: "Relaxation", icon: Activity, description: "Reading, gentle music, warm bath" },
              { time: "9:00 PM", activity: "Prepare for sleep", icon: Bed, description: "Warm milk with spices" },
              { time: "10:00 PM", activity: "Sleep", icon: Bed, description: "Early bedtime for adequate rest" }
            ]
          }
        }
      },
      pitta: {
        name: "Pitta",
        description: "Pitta types thrive on a balanced routine that avoids excessive heat and intensity.",
        schedule: {
          morning: {
            time: "5:30 AM - 10:00 AM",
            activities: [
              { time: "5:30 AM", activity: "Early wake up", icon: Sunrise, description: "Wake up before sunrise to avoid heat" },
              { time: "6:00 AM", activity: "Cooling shower", icon: Activity, description: "Cool water to balance heat" },
              { time: "6:30 AM", activity: "Moderate exercise", icon: Activity, description: "Swimming, cycling, or yoga" },
              { time: "7:30 AM", activity: "Meditation", icon: Activity, description: "Cooling breath work and meditation" },
              { time: "8:00 AM", activity: "Cooling breakfast", icon: Utensils, description: "Sweet fruits, cooling foods" },
              { time: "9:00 AM", activity: "Begin work", icon: Activity, description: "Start with planning and organization" }
            ]
          },
          afternoon: {
            time: "10:00 AM - 2:00 PM",
            activities: [
              { time: "10:00 AM", activity: "Light snack", icon: Coffee, description: "Coconut water or cooling tea" },
              { time: "12:00 PM", activity: "Lunch", icon: Utensils, description: "Cooling foods, avoid spicy dishes" },
              { time: "1:00 PM", activity: "Rest in cool place", icon: Activity, description: "Avoid direct sun, stay cool" }
            ]
          },
          evening: {
            time: "2:00 PM - 6:00 PM",
            activities: [
              { time: "2:00 PM", activity: "Continue work", icon: Activity, description: "Focus on analytical tasks" },
              { time: "4:00 PM", activity: "Cooling exercise", icon: Activity, description: "Swimming or evening walk" },
              { time: "5:00 PM", activity: "Evening routine", icon: Activity, description: "Prepare for dinner" }
            ]
          },
          night: {
            time: "6:00 PM - 10:00 PM",
            activities: [
              { time: "6:00 PM", activity: "Light dinner", icon: Utensils, description: "Cooling foods, avoid heavy meals" },
              { time: "7:00 PM", activity: "Evening activities", icon: Activity, description: "Reading, music, social time" },
              { time: "8:00 PM", activity: "Relaxation", icon: Activity, description: "Cool bath, gentle activities" },
              { time: "9:00 PM", activity: "Prepare for sleep", icon: Bed, description: "Cooling herbal tea" },
              { time: "10:00 PM", activity: "Sleep", icon: Bed, description: "Ensure adequate sleep" }
            ]
          }
        }
      },
      kapha: {
        name: "Kapha",
        description: "Kapha types benefit from an energizing routine that promotes activity and stimulation.",
        schedule: {
          morning: {
            time: "5:00 AM - 10:00 AM",
            activities: [
              { time: "5:00 AM", activity: "Early wake up", icon: Sunrise, description: "Wake up early to avoid lethargy" },
              { time: "5:30 AM", activity: "Energetic exercise", icon: Activity, description: "Vigorous exercise, running, dancing" },
              { time: "6:30 AM", activity: "Stimulating shower", icon: Activity, description: "Cold shower to energize" },
              { time: "7:00 AM", activity: "Energizing meditation", icon: Activity, description: "Active meditation or chanting" },
              { time: "7:30 AM", activity: "Light breakfast", icon: Utensils, description: "Light, dry foods, avoid heavy dairy" },
              { time: "8:00 AM", activity: "Begin work", icon: Activity, description: "Start with challenging tasks" }
            ]
          },
          afternoon: {
            time: "10:00 AM - 2:00 PM",
            activities: [
              { time: "10:00 AM", activity: "Light snack", icon: Coffee, description: "Warming tea with ginger" },
              { time: "12:00 PM", activity: "Moderate lunch", icon: Utensils, description: "Light meal with warming spices" },
              { time: "1:00 PM", activity: "Active break", icon: Activity, description: "Short walk, avoid napping" }
            ]
          },
          evening: {
            time: "2:00 PM - 6:00 PM",
            activities: [
              { time: "2:00 PM", activity: "Continue work", icon: Activity, description: "Focus on physical tasks" },
              { time: "4:00 PM", activity: "Active exercise", icon: Activity, description: "Sports, gym, or vigorous activity" },
              { time: "5:00 PM", activity: "Evening routine", icon: Activity, description: "Prepare for dinner" }
            ]
          },
          night: {
            time: "6:00 PM - 10:00 PM",
            activities: [
              { time: "6:00 PM", activity: "Light dinner", icon: Utensils, description: "Light meal, avoid heavy foods" },
              { time: "7:00 PM", activity: "Evening activities", icon: Activity, description: "Social activities, hobbies" },
              { time: "8:00 PM", activity: "Relaxation", icon: Activity, description: "Light reading, avoid TV" },
              { time: "9:00 PM", activity: "Prepare for sleep", icon: Bed, description: "Warming herbal tea" },
              { time: "10:00 PM", activity: "Sleep", icon: Bed, description: "Early bedtime to wake up early" }
            ]
          }
        }
      }
    };
    return scheduleData[primaryDosha];
  };

  const getTimeIcon = (time) => {
    switch (time) {
      case 'morning':
        return <Sunrise className="w-5 h-5" />;
      case 'afternoon':
        return <Sun className="w-5 h-5" />;
      case 'evening':
        return <Sun className="w-5 h-5" />;
      case 'night':
        return <Moon className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  if (!prakritiResult) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Daily Schedule</h1>
          <p className="text-gray-600">Complete your Prakriti analysis first to get personalized daily routine recommendations</p>
        </div>
        <Card>
          <CardContent className="text-center py-12">
            <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Please complete the Prakriti analysis to view your personalized daily schedule.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const scheduleData = getScheduleRecommendations(prakritiResult.primaryDosha);
  const timeSlots = ['morning', 'afternoon', 'evening', 'night'];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Daily Schedule</h1>
        <p className="text-gray-600">Personalized daily routine for {scheduleData.name} dosha</p>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-green-700">
            <Clock className="w-5 h-5 mr-2" />
            {scheduleData.name} Dosha Daily Routine
          </CardTitle>
          <p className="text-gray-700">{scheduleData.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {timeSlots.map((time) => (
              <Button
                key={time}
                onClick={() => setSelectedTime(time)}
                variant={selectedTime === time ? "default" : "outline"}
                className={`flex items-center space-x-2 capitalize ${
                  selectedTime === time ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
              >
                {getTimeIcon(time)}
                <span>{time}</span>
              </Button>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                {getTimeIcon(selectedTime)}
                <span className="ml-2 capitalize">{selectedTime} Schedule</span>
                <span className="ml-auto text-sm text-gray-500">
                  {scheduleData.schedule[selectedTime].time}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData.schedule[selectedTime].activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border">
                    <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-500">
                      {activity.time}
                    </div>
                    <div className="flex-shrink-0">
                      <activity.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{activity.activity}</h4>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Key Principles for {scheduleData.name} Dosha</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {scheduleData.name === 'Vata' && (
                <>
                  <li>• Maintain a regular daily routine</li>
                  <li>• Avoid overexertion and irregular schedules</li>
                  <li>• Include grounding and calming activities</li>
                  <li>• Get adequate sleep (7-8 hours)</li>
                  <li>• Eat at regular times</li>
                  <li>• Practice gentle, calming exercises</li>
                </>
              )}
              {scheduleData.name === 'Pitta' && (
                <>
                  <li>• Avoid excessive heat and intensity</li>
                  <li>• Stay cool and maintain work-life balance</li>
                  <li>• Include cooling and calming activities</li>
                  <li>• Get moderate sleep (6-7 hours)</li>
                  <li>• Avoid working late into the night</li>
                  <li>• Practice cooling exercises and meditation</li>
                </>
              )}
              {scheduleData.name === 'Kapha' && (
                <>
                  <li>• Wake up early and stay active</li>
                  <li>• Avoid oversleeping and lethargy</li>
                  <li>• Include stimulating and energizing activities</li>
                  <li>• Get adequate but not excessive sleep (6-7 hours)</li>
                  <li>• Exercise regularly and vigorously</li>
                  <li>• Avoid daytime napping</li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Seasonal Adjustments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Spring (Kapha Season):</h4>
                <p className="text-gray-600">Increase activity, light foods, avoid heavy and sweet foods</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Summer (Pitta Season):</h4>
                <p className="text-gray-600">Stay cool, avoid heat, eat cooling foods, moderate exercise</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Fall/Winter (Vata Season):</h4>
                <p className="text-gray-600">Stay warm, eat grounding foods, maintain routine, gentle exercise</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 