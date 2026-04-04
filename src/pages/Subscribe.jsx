import React, { useState } from 'react';

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [dietInfo, setDietInfo] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    gender: '',
    age: '',
    address: '',
    notes: ''
  });

  const plans = [
    {
      id: 'food-delivery',
      title: '✅ Your Food Delivery Plan',
      subtitle: 'Perfect for beginners starting their fitness journey. Our balanced approach helps you lose weight sustainably while enjoying delicious meals.',
      target: 'Expected Result: 5-8kgs fat loss in a month',
      meals: 'Daily Delivery: Breakfast, Lunch, Evening Snack & Dinner',
      features: [
        '🎯 Ideal for: First-time dieters, busy professionals',
        '⏰ Results visible in: 2-3 weeks',
        '🍽️ Food style: Indian cuisine with modern twist',
        '📦 Fresh meals delivered daily to your doorstep',
        '👨‍🍳 Personal nutritionist guidance & weekly tracking'
      ]
    },
    {
      id: 'detox-cut',
      title: '🌱 10 Day Detox Cut Diet',
      subtitle: 'Reset your body and kickstart your weight loss journey with our powerful detox program. Cleanse from within and feel revitalized.',
      target: 'Expected Result: 3-5kgs in 10 days',
      meals: 'Daily Delivery: Breakfast, Lunch, Evening Snack & Dinner',
      features: [
        '🎯 Ideal for: Quick results, event preparation, plateau breaking',
        '⏰ Results visible in: 3-5 days',
        '🍽️ Food style: Clean, natural, unprocessed foods',
        '📦 Detox-specific meals delivered daily',
        '💪 Body reset and metabolism boost with superfoods'
      ]
    },
    {
      id: 'keto-delivery',
      title: '🔥 Keto Delivery',
      subtitle: 'Accelerate fat burning with our scientifically-designed ketogenic program. Transform your body into a fat-burning machine.',
      target: 'Expected Result: 5-10kgs in a month',
      meals: 'Daily Delivery: Breakfast, Lunch, Snack, Dinner',
      features: [
        '🎯 Ideal for: Rapid fat loss, metabolic flexibility',
        '⏰ Results visible in: 1-2 weeks',
        '🍽️ Food style: Rich fats, moderate protein, zero carbs',
        '📦 Keto-optimized meals delivered daily',
        '🧠 Enhanced mental clarity and sustained energy'
      ]
    },
    {
      id: 'make-plan',
      title: '🎨 Make Your Plan',
      subtitle: 'Your journey, your rules. Get a completely personalized diet plan designed around your lifestyle, preferences, and goals.',
      target: 'Expected Result: Based on your personal goals',
      meals: 'Flexible Delivery: Customized meal timing and options',
      features: [
        '🎯 Ideal for: Specific dietary needs, flexible schedules',
        '⏰ Results: Personalized timeline based on goals',
        '🍽️ Food style: Completely customized to your preferences',
        '📦 Flexible timing and meal options',
        '👨‍🍳 Dedicated nutritionist and weekly adjustments'
      ]
    }
  ];

  const dietGoals = [
    'Weight Loss',
    'Weight Gain', 
    'Weight Maintenance',
    'Gain Muscle',
    'Detox Cut Diet',
    'Body Requirements'
  ];

  const subscriptionDays = [
    '3 Days Trial',
    '2 Weeks',
    '4 Weeks'
  ];

  const mealsPerDay = [
    '1',
    '2', 
    '3',
    '4'
  ];

  const dietTypes = [
    'Veg',
    'Non Veg',
    'Eggetarian',
    'Non Veg but Veg on particular days'
  ];

  const mealChoices = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Evening Snack'
  ];

  const weightLossDiets = [
    'Balanced Diet',
    'Keto Diet',
    'High Protein',
    'Vegan Diet'
  ];

  const getDietQuestions = () => {
    let questions = [];
    
    // Add basic info questions first for all plans
    questions.push(
      {
        id: 'name',
        question: 'What is your name?',
        type: 'input',
        inputType: 'text',
        placeholder: 'Enter your full name',
        key: 'name'
      },
      {
        id: 'age',
        question: 'What is your age?',
        type: 'dropdown',
        options: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        key: 'age'
      },
      {
        id: 'mobile',
        question: 'What is your mobile number?',
        type: 'input',
        inputType: 'tel',
        placeholder: 'Enter your mobile number (10 digits)',
        pattern: '[0-9]{10}',
        key: 'mobile'
      },
      {
        id: 'address',
        question: 'What is your address?',
        type: 'input',
        inputType: 'text',
        placeholder: 'Enter your complete address',
        key: 'address'
      },
      {
        id: 'proteinRequirement',
        question: 'How much protein do you need per meal?',
        type: 'input',
        inputType: 'number',
        placeholder: 'Enter protein in grams (e.g., 30)',
        key: 'proteinRequirement'
      },
      {
        id: 'carbsRequirement',
        question: 'How much carbs do you need per meal?',
        type: 'input',
        inputType: 'number',
        placeholder: 'Enter carbs in grams (e.g., 40)',
        key: 'carbsRequirement'
      },
      {
        id: 'fibreRequirement',
        question: 'How much fibre do you need per meal?',
        type: 'input',
        inputType: 'number',
        placeholder: 'Enter fibre in grams (e.g., 15)',
        key: 'fibreRequirement'
      },
      {
        id: 'anythingElse',
        question: 'Is there anything else you want to specify?',
        type: 'input',
        inputType: 'text',
        placeholder: 'Any additional requirements or preferences',
        key: 'anythingElse'
      },
      {
        id: 'currentWeight',
        question: 'What is your current weight?',
        type: 'input',
        inputType: 'number',
        placeholder: 'Enter your weight in kg',
        key: 'currentWeight'
      },
      {
        id: 'expectedWeight',
        question: 'What is your expected weight?',
        type: 'input',
        inputType: 'number',
        placeholder: 'Enter your target weight in kg',
        key: 'expectedWeight'
      },
      {
        id: 'motivation',
        question: 'What made you think of following a diet?',
        type: 'dropdown',
        options: ['Health concerns', 'Look better', 'Feel more energetic', 'Medical advice', 'Special event', 'Other'],
        key: 'motivation'
      },
      {
        id: 'seriousness',
        question: 'Are you serious about making it happen?',
        type: 'dropdown',
        options: ['Yes, 100% committed!', 'I think so', 'Still considering', 'Just exploring'],
        key: 'seriousness'
      },
      {
        id: 'medicalIssues',
        question: 'Do you have any medical issues?',
        type: 'dropdown',
        options: ['No', 'Yes'],
        key: 'medicalIssues'
      },
      {
        id: 'foodAllergies',
        question: 'Do you have any food allergies?',
        type: 'dropdown',
        options: ['No', 'Yes'],
        key: 'foodAllergies'
      }
    );

    // Add conditional questions based on medical issues and allergies
    if (dietInfo.medicalIssues === 'Yes') {
      questions.push({
        id: 'medicalDetails',
        question: 'What is the medical issue?',
        type: 'input',
        inputType: 'text',
        placeholder: 'Describe your medical condition',
        key: 'medicalDetails'
      });
    }

    if (dietInfo.foodAllergies === 'Yes') {
      questions.push({
        id: 'allergyDetails',
        question: 'What food allergies do you have?',
        type: 'input',
        inputType: 'text',
        placeholder: 'List all food allergies (e.g., nuts, dairy, gluten, etc.)',
        key: 'allergyDetails'
      });
    }

    // Plan-specific diet goals
    if (selectedPlan === 'food-delivery') {
      questions.push({
        id: 'goal',
        question: 'What is your goal?',
        type: 'dropdown',
        options: ['Weight Loss', 'Weight Gain', 'Weight Maintenance', 'Gain Muscle'],
        key: 'goal'
      });
    } else if (selectedPlan === 'detox-cut') {
      questions.push({
        id: 'goal',
        question: 'What is your goal?',
        type: 'dropdown',
        options: ['Detox Cut Diet'],
        key: 'goal'
      });
    } else if (selectedPlan === 'keto-delivery') {
      questions.push({
        id: 'goal',
        question: 'What is your goal?',
        type: 'dropdown',
        options: ['Weight Loss'],
        key: 'goal'
      });
    } else if (selectedPlan === 'make-plan') {
      questions.push({
        id: 'goal',
        question: 'What is your goal?',
        type: 'dropdown',
        options: ['Weight Loss', 'Weight Gain', 'Weight Maintenance', 'Gain Muscle', 'Body Requirements'],
        key: 'goal'
      });
    }

    // Add weight loss specific diet technique question
    if (dietInfo.goal === 'Weight Loss') {
      questions.push({
        id: 'dietTechnique',
        question: 'Preferred Diet Technique?',
        type: 'dropdown',
        options: weightLossDiets,
        key: 'dietTechnique'
      });
    }

    // Add body requirements specific questions
    if (dietInfo.goal === 'Body Requirements') {
      questions.push(
        {
          id: 'mealsPerDay',
          question: 'How many meals in a day?',
          type: 'dropdown',
          options: ['1 meal', '2 meals', '3 meals', '4 meals'],
          key: 'mealsPerDay'
        },
        {
          id: 'proteinRequirement',
          question: 'How much protein do you need for the selected meals?',
          type: 'dropdown',
          options: ['20-30g per meal', '30-40g per meal', '40-50g per meal', '50+g per meal'],
          key: 'proteinRequirement'
        },
        {
          id: 'carbsRequirement',
          question: 'How much carbs do you need per meal?',
          type: 'dropdown',
          options: ['20-30g per meal', '30-40g per meal', '40-50g per meal', '50+g per meal'],
          key: 'carbsRequirement'
        },
        {
          id: 'fatsRequirement',
          question: 'How much fats do you need per meal?',
          type: 'dropdown',
          options: ['5-10g per meal', '10-15g per meal', '15-20g per meal', '20+g per meal'],
          key: 'fatsRequirement'
        }
      );
    } else {
      // Add common questions for other goals
      questions.push(
        {
          id: 'subscriptionDays',
          question: 'How many days you want to subscribe?',
          type: 'dropdown',
          options: subscriptionDays,
          key: 'subscriptionDays'
        },
        {
          id: 'mealsPerDay',
          question: 'How many meals per day?',
          type: 'dropdown',
          options: mealsPerDay,
          key: 'mealsPerDay'
        },
        {
          id: 'dietType',
          question: 'Are you vegetarian or non vegetarian?',
          type: 'dropdown',
          options: dietTypes,
          key: 'dietType'
        },
        {
          id: 'mealChoice',
          question: dietInfo.mealsPerDay === '1' ? 'Choose your meal for each day (select one)' : 
                   dietInfo.mealsPerDay === '2' ? 'Choose your meals for each day (select any 2)' :
                   dietInfo.mealsPerDay === '3' ? 'Choose your meals for each day (select any 3)' :
                   'Choose your meals for each day (select multiple)',
          type: 'dropdown',
          options: mealChoices,
          key: 'mealChoice',
          multiple: true,
          maxSelections: dietInfo.mealsPerDay === '4' ? 4 : parseInt(dietInfo.mealsPerDay) || 0
        }
      );
    }

    return questions;
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setCurrentStep(0);
    setDietInfo({});
  };

  const handleDietAnswer = (key, value) => {
    if (key === 'mealChoice' && questions[currentStep]?.multiple) {
      // Handle multiple selections for mealChoice with limits
      setDietInfo(prev => {
        const currentValues = prev[key] ? prev[key].split(', ') : [];
        const maxSelections = questions[currentStep]?.maxSelections || 0;
        
        if (currentValues.includes(value)) {
          // Remove if already selected
          return { ...prev, [key]: currentValues.filter(v => v !== value).join(', ') };
        } else if (maxSelections > 0 && currentValues.length >= maxSelections) {
          // Don't add if already at max selections
          return prev;
        } else {
          // Add if not selected and under limit
          return { ...prev, [key]: [...currentValues, value].join(', ') };
        }
      });
    } else {
      // Handle single selections and input fields - update the value
      setDietInfo(prev => {
        const updatedInfo = { ...prev, [key]: value };
        
        // If editing a question that affects conditional questions, preserve existing values
        // for questions that might be removed and re-added
        if (key === 'medicalIssues' || key === 'foodAllergies' || key === 'goal') {
          const preservedKeys = ['medicalDetails', 'allergyDetails', 'dietTechnique', 'mealsPerDay', 'proteinRequirement', 'carbsRequirement', 'fatsRequirement'];
          preservedKeys.forEach(preservedKey => {
            if (prev[preservedKey]) {
              updatedInfo[preservedKey] = prev[preservedKey];
            }
          });
        }
        
        return updatedInfo;
      });
      
      // For dropdown questions, automatically move to next step after selection
      const currentQuestion = questions[currentStep];
      if (currentQuestion && currentQuestion.type === 'dropdown' && !currentQuestion.multiple) {
        setTimeout(() => {
          if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
          }
        }, 300);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPlanData = plans.find(p => p.id === selectedPlan);
    
    // Create comprehensive email body with diet info
    const dietInfoText = Object.entries(dietInfo).map(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      return `${formattedKey}: ${value}`;
    }).join('\n');

    const body = encodeURIComponent(
      `Plan: ${selectedPlanData?.title}\n\n` +
      `=== DIET INFORMATION ===\n${dietInfoText}\n\n` +
      `=== PERSONAL DETAILS ===\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email}\n` +
      `Gender: ${formData.gender}\n` +
      `Age: ${formData.age}\n` +
      `Address: ${formData.address}\n` +
      `Notes: ${formData.notes}\n\n` +
      `=== PRICING NOTE ===\n` +
      `Price will be calculated according to the diet, protein, fibre, carb requirements based on your selections above.`
    );
    
    const subject = encodeURIComponent(`Bowlvana Subscription - ${selectedPlanData?.title} - ${dietInfo.goal || 'Custom'}`);
    window.location.href = `mailto:vsaishiva99@gmail.com?subject=${subject}&body=${body}`;
  };

  const questions = getDietQuestions();
  const currentQuestion = questions[currentStep];

  return (
    <section className="subscribe-section" style={{ padding: '64px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', marginBottom: 16, textTransform: 'uppercase' }}>
          #PRICING
        </h2>
        
        {!selectedPlan ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginTop: 48 }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  background: '#ffffff',
                  border: '2px solid var(--accent)',
                  borderRadius: 12,
                  padding: 32,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
                onClick={() => handlePlanSelect(plan.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 102, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 12 }}>
                  {plan.title}
                </h3>
                <p style={{ color: '#333333', fontSize: '1rem', lineHeight: 1.6, marginBottom: 16 }}>
                  {plan.subtitle}
                </p>
                <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 12 }}>
                  {plan.target}
                </p>
                <p style={{ color: '#333333', fontSize: '0.9rem', marginBottom: 20 }}>
                  {plan.meals}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ color: '#333333', fontSize: '0.9rem', marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: 'var(--accent)', marginRight: 8 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <button
              onClick={() => setSelectedPlan('')}
              style={{
                background: 'none',
                color: 'var(--accent)',
                border: '2px solid var(--accent)',
                borderRadius: 8,
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 32
              }}
            >
              ← Back to Plans
            </button>
            
            <div style={{ background: '#ffffff', border: '2px solid var(--accent)', borderRadius: 12, padding: 40, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
　　 　 　 　 {/* Diet Information Questions */}
              {currentStep < questions.length ? (
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 16, textAlign: 'center' }}>
                    Diet Information
                  </h3>
                  <p style={{ color: '#333333', textAlign: 'center', marginBottom: 32 }}>
                    Help us customize your perfect diet plan
                  </p>
                  <div style={{ marginBottom: 40 }}>
                    {questions.map((question, index) => (
                      <div key={question.id} style={{ marginBottom: 30, opacity: index <= currentStep ? 1 : 0.5, transition: 'opacity 0.3s ease' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000000', marginBottom: 16 }}>
                          {question.question}
                        </h4>
                        {index < currentStep ? (
                          <div 
                            style={{ 
                              padding: '16px', 
                              background: '#f0f8f0', 
                              border: '2px solid var(--accent)', 
                              borderRadius: 8,
                              color: '#000000',
                              fontSize: '1rem',
                              fontWeight: 600,
                              textAlign: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onClick={() => setCurrentStep(index)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#e8f5e8';
                              e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#f0f8f0';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            ✅ {dietInfo[question.key]}
                            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: 4 }}>
                              Click to edit
                            </div>
                          </div>
                        ) : (
                          question.type === 'input' ? (
                            <div style={{ display: 'grid', gap: 12 }}>
                              <input
                                type={question.inputType}
                                placeholder={question.placeholder}
                                value={dietInfo[question.key] || ''}
                                onChange={(e) => handleDietAnswer(question.key, e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    setTimeout(() => {
                                      if (currentStep < getDietQuestions().length - 1) {
                                        setCurrentStep(prev => prev + 1);
                                      }
                                    }, 300);
                                  }
                                }}
                                style={{
                                  width: '100%',
                                  padding: '16px',
                                  border: '2px solid var(--border)',
                                  borderRadius: 8,
                                  fontSize: '1rem',
                                  background: '#ffffff',
                                  color: '#333333',
                                  opacity: index === currentStep ? 1 : 0.5,
                                  pointerEvents: index === currentStep ? 'auto' : 'none'
                                }}
                              />
                              <button
                                onClick={() => {
                                  if (dietInfo[question.key] && dietInfo[question.key].trim()) {
                                    setTimeout(() => {
                                      if (currentStep < getDietQuestions().length - 1) {
                                        setCurrentStep(prev => prev + 1);
                                      }
                                    }, 300);
                                  }
                                }}
                                disabled={!dietInfo[question.key] || !dietInfo[question.key].trim()}
                                style={{
                                  width: '100%',
                                  padding: '16px',
                                  border: '2px solid var(--accent)',
                                  borderRadius: 8,
                                  background: (dietInfo[question.key] && dietInfo[question.key].trim()) ? 'var(--accent)' : '#f0f0f0',
                                  color: (dietInfo[question.key] && dietInfo[question.key].trim()) ? '#000000' : '#888888',
                                  fontSize: '1rem',
                                  fontWeight: 600,
                                  cursor: (dietInfo[question.key] && dietInfo[question.key].trim()) ? 'pointer' : 'not-allowed',
                                  transition: 'all 0.3s ease',
                                  opacity: index === currentStep ? 1 : 0.5,
                                  pointerEvents: index === currentStep ? 'auto' : 'none'
                                }}
                              >
                                Next →
                              </button>
                            </div>
                          ) : question.multiple ? (
                            <div style={{ display: 'grid', gap: 12 }}>
                              {question.options.map((option) => {
                                const currentValues = dietInfo[question.key] ? dietInfo[question.key].split(', ') : [];
                                const isSelected = currentValues.includes(option);
                                return (
                                  <button
                                    key={option}
                                    onClick={() => handleDietAnswer(question.key, option)}
                                    style={{
                                      width: '100%',
                                      padding: '16px',
                                      border: isSelected ? '2px solid var(--accent)' : '2px solid var(--border)',
                                      borderRadius: 8,
                                      background: isSelected ? 'var(--accent)' : '#ffffff',
                                      color: isSelected ? '#000000' : '#333333',
                                      fontSize: '1rem',
                                      fontWeight: 600,
                                      cursor: 'pointer',
                                      transition: 'all 0.3s ease',
                                      textAlign: 'left',
                                      opacity: index === currentStep ? 1 : 0.5,
                                      pointerEvents: index === currentStep ? 'auto' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (index === currentStep && !isSelected) {
                                        e.currentTarget.style.borderColor = 'var(--accent)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (index === currentStep && !isSelected) {
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                      }
                                    }}
                                  >
                                    {isSelected ? '✅ ' : ''}{option}
                                  </button>
                                );
                              })}
                              {dietInfo[question.key] && (
                                <button
                                  onClick={() => {
                                    setTimeout(() => {
                                      if (currentStep < getDietQuestions().length - 1) {
                                        setCurrentStep(prev => prev + 1);
                                      }
                                    }, 300);
                                  }}
                                  style={{
                                    width: '100%',
                                    padding: '16px',
                                    border: '2px solid var(--accent)',
                                    borderRadius: 8,
                                    background: 'var(--accent)',
                                    color: '#000000',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    opacity: index === currentStep ? 1 : 0.5,
                                    pointerEvents: index === currentStep ? 'auto' : 'none'
                                  }}
                                >
                                  Next →
                                </button>
                              )}
                            </div>
                          ) : (
                            <div style={{ display: 'grid', gap: 12 }}>
                              <select
                                value={dietInfo[question.key] || ''}
                                onChange={(e) => handleDietAnswer(question.key, e.target.value)}
                                style={{
                                  width: '100%',
                                  padding: '16px',
                                  border: '2px solid var(--border)',
                                  borderRadius: 8,
                                  fontSize: '1rem',
                                  fontWeight: 'bold',
                                  background: '#ffffff',
                                  color: '#000000',
                                  opacity: index === currentStep ? 1 : 0.5,
                                  pointerEvents: index === currentStep ? 'auto' : 'none',
                                  cursor: index === currentStep ? 'pointer' : 'default'
                                }}
                              >
                                <option value="" disabled style={{ color: '#888888', fontWeight: 'normal' }}>
                                  Select an option...
                                </option>
                                {question.options.map((option) => (
                                  <option key={option} value={option} style={{ color: '#000000', fontWeight: 'bold' }}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              {dietInfo[question.key] && (
                                <button
                                  onClick={() => {
                                    setTimeout(() => {
                                      if (currentStep < getDietQuestions().length - 1) {
                                        setCurrentStep(prev => prev + 1);
                                      }
                                    }, 300);
                                  }}
                                  style={{
                                    width: '100%',
                                    padding: '16px',
                                    border: '2px solid var(--accent)',
                                    borderRadius: 8,
                                    background: 'var(--accent)',
                                    color: '#000000',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    opacity: index === currentStep ? 1 : 0.5,
                                    pointerEvents: index === currentStep ? 'auto' : 'none'
                                  }}
                                >
                                  Next →
                                </button>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    ))}
                    <div style={{ textAlign: 'center', marginTop: 24 }}>
                      <span style={{ color: '#666666', fontSize: '0.9rem' }}>
                        Question {currentStep + 1} of {questions.length}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 16, textAlign: 'center' }}>
                    Personal Details
                  </h3>
                  <p style={{ color: '#333333', textAlign: 'center', marginBottom: 32 }}>
                    Fill in your details to complete your subscription
                  </p>
                  
                  {/* Display selected diet info */}
                  <div style={{ background: '#f8f8f8', padding: 20, borderRadius: 8, marginBottom: 32 }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 12 }}>
                      Your Diet Preferences:
                    </h4>
                    {Object.entries(dietInfo).map(([key, value]) => (
                      <div key={key} style={{ marginBottom: 8, color: '#333333' }}>
                        <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ background: '#fff3cd', padding: 16, borderRadius: 8, marginBottom: 32, border: '1px solid #ffeaa7' }}>
                    <p style={{ color: '#856404', fontSize: '0.95rem', margin: 0, textAlign: 'center' }}>
                      <strong>📝 Important Note:</strong> Price will be calculated according to the diet, protein, fibre, carb requirements based on your selections above.
                    </p>
                    {dietInfo.goal === 'Body Requirements' && (
                      <p style={{ color: '#856404', fontSize: '0.95rem', margin: '10px 0 0 0', textAlign: 'center' }}>
                        <strong>💡 Need Help:</strong> If you are unaware about your requirements, call us at <a href="tel:8498803808" style={{ color: '#856404', fontWeight: 'bold', textDecoration: 'underline' }}>8498803808</a>, our team will get back to you.
                      </p>
                    )}
                  </div>
                  
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Name*
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Mobile*
                      </label>
                      <input
                        name="mobile"
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Complete Address*
                      </label>
                      <textarea
                        name="completeAddress"
                        required
                        value={formData.completeAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your complete address (street, city, state, pincode)"
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Email*
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Gender*
                      </label>
                      <select
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: formData.gender ? '#000000' : '#888888'
                        }}
                      >
                        <option value="" style={{ color: '#888888' }}>Select Gender</option>
                        <option value="Male" style={{ color: '#000000' }}>Male</option>
                        <option value="Female" style={{ color: '#000000' }}>Female</option>
                        <option value="Other" style={{ color: '#000000' }}>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Age*
                      </label>
                      <input
                        name="age"
                        type="number"
                        min="1"
                        max="120"
                        required
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Enter your age"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Delivery Address*
                      </label>
                      <textarea
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your complete delivery address"
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements or preferences?"
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '1rem',
                          background: '#ffffff',
                          color: '#000000',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="cta-button"
                      style={{
                        background: 'var(--accent)',
                        color: '#000000',
                        padding: '16px 32px',
                        border: 'none',
                        borderRadius: 8,
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: 20
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-dark)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--accent)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: '#333333', fontSize: '1.1rem', marginBottom: 16 }}>
            Confused? <a href="tel:8498803808" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 700 }}>
              Click here to get on a free consultation call with a Bowlvana Nutritionist
            </a> & choose the right plan for you.
          </p>
        </div>
      </div>
    </section>
  );
}