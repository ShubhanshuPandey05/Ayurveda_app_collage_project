import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { User, Brain, Utensils, Clock, Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to Your Ayurvedic Wellness Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover your unique body constitution (Prakriti) and receive personalized 
          recommendations for diet, lifestyle, and daily routines based on ancient Ayurvedic wisdom.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-green-700">Personal Profile</CardTitle>
            <CardDescription>
              Create your wellness profile with personal details and health information
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/profile">
              <Button className="w-full">Get Started</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-700">Prakriti Analysis</CardTitle>
            <CardDescription>
              Discover your unique body constitution through our comprehensive questionnaire
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/prakriti">
              <Button className="w-full">Take Assessment</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6 text-orange-600" />
            </div>
            <CardTitle className="text-orange-700">Personalized Diet</CardTitle>
            <CardDescription>
              Get customized diet recommendations based on your Prakriti type
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/diet">
              <Button className="w-full">View Diet Plan</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-purple-700">Daily Schedule</CardTitle>
            <CardDescription>
              Follow a balanced daily routine tailored to your constitution
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/schedule">
              <Button className="w-full">View Schedule</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Ayurvedic Principles */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Understanding Ayurveda
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Ayurveda, the ancient Indian system of medicine, recognizes three fundamental energies 
            or doshas: <strong>Vata</strong> (air & space), <strong>Pitta</strong> (fire & water), 
            and <strong>Kapha</strong> (earth & water). Each person has a unique combination of 
            these doshas that determines their physical and mental characteristics.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Vata Dosha</h4>
              <p className="text-gray-600">Creative, quick-thinking, and adaptable. When balanced, Vata promotes creativity and flexibility.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 mb-2">Pitta Dosha</h4>
              <p className="text-gray-600">Intelligent, goal-oriented, and determined. When balanced, Pitta promotes understanding and leadership.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Kapha Dosha</h4>
              <p className="text-gray-600">Strong, caring, and patient. When balanced, Kapha promotes love, calmness, and forgiveness.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 