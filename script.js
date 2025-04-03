// Disease dataset (this would be loaded from your Kaggle dataset)
const diseaseData = [
    {
        "disease": "Common Cold",
        "symptoms": ["cough", "fever", "runny nose", "sneezing", "sore throat", "congestion", "fatigue"],
        "medicines": ["Acetaminophen (Tylenol)", "Ibuprofen (Advil)", "Decongestants", "Cough suppressants"],
        "home_remedies": ["Rest", "Drink plenty of fluids", "Gargle with salt water", "Honey and lemon tea", "Steam inhalation"],
        "recovery_time": "7-10 days",
        "precautions": ["Wash hands frequently", "Avoid close contact with sick people", "Cover mouth when coughing or sneezing"]
    },
    {
        "disease": "Influenza (Flu)",
        "symptoms": ["fever", "chills", "body aches", "fatigue", "headache", "cough", "sore throat"],
        "medicines": ["Oseltamivir (Tamiflu)", "Zanamivir (Relenza)", "Acetaminophen", "Ibuprofen"],
        "home_remedies": ["Rest", "Stay hydrated", "Warm soup", "Humidifier"],
        "recovery_time": "1-2 weeks",
        "precautions": ["Annual flu vaccination", "Wash hands frequently", "Avoid touching face"]
    },
    {
        "disease": "Migraine",
        "symptoms": ["severe headache", "nausea", "vomiting", "sensitivity to light", "sensitivity to sound", "vision changes"],
        "medicines": ["Triptans (Sumatriptan)", "Ergotamines", "NSAIDs", "Anti-nausea medications"],
        "home_remedies": ["Rest in dark quiet room", "Cold or warm compress", "Caffeine", "Relaxation techniques"],
        "recovery_time": "4-72 hours",
        "precautions": ["Identify and avoid triggers", "Regular sleep schedule", "Stay hydrated", "Stress management"]
    },
    {
        "disease": "Food Poisoning",
        "symptoms": ["nausea", "vomiting", "diarrhea", "abdominal pain", "fever", "headache", "dehydration"],
        "medicines": ["Loperamide (Imodium)", "Bismuth subsalicylate (Pepto-Bismol)", "Antibiotics (in severe cases)"],
        "home_remedies": ["Stay hydrated", "BRAT diet (Bananas, Rice, Applesauce, Toast)", "Ginger tea", "Avoid dairy and fatty foods"],
        "recovery_time": "1-2 days (mild cases) to 1-2 weeks (severe cases)",
        "precautions": ["Proper food handling", "Thorough cooking", "Proper refrigeration", "Hand washing"]
    },
    {
        "disease": "Urinary Tract Infection (UTI)",
        "symptoms": ["burning urination", "frequent urination", "urgency to urinate", "cloudy urine", "strong-smelling urine", "pelvic pain"],
        "medicines": ["Trimethoprim/sulfamethoxazole (Bactrim)", "Fosfomycin (Monurol)", "Nitrofurantoin (Macrodantin)", "Pain relievers"],
        "home_remedies": ["Drink plenty of water", "Avoid caffeine and alcohol", "Vitamin C", "Cranberry juice"],
        "recovery_time": "3-10 days with antibiotics",
        "precautions": ["Stay hydrated", "Urinate after sexual activity", "Wipe from front to back", "Wear cotton underwear"]
    },
    {
        "disease": "Allergic Rhinitis",
        "symptoms": ["sneezing", "runny nose", "watery eyes", "itchy nose", "congestion", "itchy eyes", "post-nasal drip"],
        "medicines": ["Antihistamines (Cetirizine, Loratadine)", "Nasal corticosteroids", "Decongestants", "Leukotriene modifiers"],
        "home_remedies": ["Nasal irrigation with saline", "Air purifiers", "Keep windows closed during high pollen", "Shower after being outdoors"],
        "recovery_time": "Symptoms improve with treatment, but condition is chronic",
        "precautions": ["Identify and avoid allergens", "Keep indoor humidity low", "Clean household surfaces regularly"]
    },
    {
        "disease": "Gastroesophageal Reflux Disease (GERD)",
        "symptoms": ["heartburn", "chest pain", "regurgitation", "difficulty swallowing", "chronic cough", "sore throat"],
        "medicines": ["Antacids", "H2 blockers (Famotidine)", "Proton pump inhibitors (Omeprazole)", "Prokinetics"],
        "home_remedies": ["Eat smaller meals", "Avoid lying down after eating", "Elevate head of bed", "Avoid trigger foods"],
        "recovery_time": "Symptoms can be managed, but condition is often chronic",
        "precautions": ["Maintain healthy weight", "Avoid tight clothing", "Quit smoking", "Limit alcohol"]
    },
    {
        "disease": "Hypertension",
        "symptoms": ["headache", "shortness of breath", "nosebleeds", "flushing", "dizziness", "chest pain", "visual changes"],
        "medicines": ["ACE inhibitors", "Angiotensin II receptor blockers", "Calcium channel blockers", "Diuretics", "Beta-blockers"],
        "home_remedies": ["DASH diet", "Regular exercise", "Limit sodium intake", "Meditation and stress reduction"],
        "recovery_time": "Chronic condition requiring ongoing management",
        "precautions": ["Regular blood pressure monitoring", "Limit alcohol", "Avoid smoking", "Maintain healthy weight"]
    },
    {
        "disease": "Bronchitis",
        "symptoms": ["persistent cough", "mucus production", "fatigue", "shortness of breath", "chest discomfort", "mild fever"],
        "medicines": ["Bronchodilators", "Cough suppressants", "Antibiotics (for bacterial infection)", "Anti-inflammatory drugs"],
        "home_remedies": ["Rest", "Humidifier", "Honey for cough", "Warm fluids", "Steam inhalation"],
        "recovery_time": "Acute: 1-2 weeks, Chronic: requires ongoing management",
        "precautions": ["Avoid smoke and air pollution", "Get pneumonia and flu vaccines", "Wash hands frequently"]
    },
    {
        "disease": "Conjunctivitis (Pink Eye)",
        "symptoms": ["red eyes", "itchy eyes", "gritty feeling", "discharge", "tearing", "sensitivity to light"],
        "medicines": ["Antibiotic eye drops (for bacterial infection)", "Antihistamine eye drops (for allergic)", "Artificial tears"],
        "home_remedies": ["Cold compress", "Wash hands frequently", "Don't touch or rub eyes", "Discard eye makeup"],
        "recovery_time": "Bacterial: 1-2 weeks, Viral: 2-3 weeks, Allergic: improves with treatment",
        "precautions": ["Wash hands frequently", "Don't share towels or pillows", "Avoid swimming pools"]
    },
    {
        "disease": "Depression",
        "symptoms": ["persistent sadness", "loss of interest", "fatigue", "sleep problems", "difficulty concentrating", "irritability", "appetite changes"],
        "medicines": ["SSRIs (Fluoxetine, Sertraline)", "SNRIs", "Tricyclic antidepressants", "Mood stabilizers"],
        "home_remedies": ["Regular exercise", "Healthy diet", "Adequate sleep", "Mindfulness meditation", "Social connection"],
        "recovery_time": "Varies widely; may take weeks to months with proper treatment",
        "precautions": ["Regular mental health check-ups", "Stress management", "Avoid alcohol and drugs"]
    },
    {
        "disease": "Diabetes Type 2",
        "symptoms": ["increased thirst", "frequent urination", "increased hunger", "fatigue", "blurred vision", "slow-healing sores"],
        "medicines": ["Metformin", "Sulfonylureas", "DPP-4 inhibitors", "GLP-1 receptor agonists", "Insulin (in some cases)"],
        "home_remedies": ["Regular exercise", "Low-carb diet", "Weight management", "Monitor blood sugar regularly"],
        "recovery_time": "Chronic condition requiring lifelong management",
        "precautions": ["Regular check-ups", "Foot care", "Eye exams", "Maintain healthy weight"]
    },
    {
        "disease": "Asthma",
        "symptoms": ["wheezing", "shortness of breath", "chest tightness", "coughing", "trouble sleeping due to breathing problems"],
        "medicines": ["Short-acting bronchodilators", "Inhaled corticosteroids", "Long-acting bronchodilators", "Leukotriene modifiers"],
        "home_remedies": ["Identify and avoid triggers", "Breathing exercises", "Air purifiers", "Steam inhalation"],
        "recovery_time": "Chronic condition with episodic flare-ups",
        "precautions": ["Regular peak flow monitoring", "Follow asthma action plan", "Keep rescue inhaler available"]
    },
    {
        "disease": "Osteoarthritis",
        "symptoms": ["joint pain", "stiffness", "swelling", "decreased range of motion", "bone spurs", "grating sensation"],
        "medicines": ["Acetaminophen", "NSAIDs", "Duloxetine", "Topical pain relievers", "Corticosteroid injections"],
        "home_remedies": ["Low-impact exercise", "Weight management", "Hot and cold therapy", "Physical therapy exercises"],
        "recovery_time": "Chronic condition with gradual progression",
        "precautions": ["Maintain healthy weight", "Protect joints", "Regular physical activity", "Use assistive devices if needed"]
    },
    {
        "disease": "Anxiety Disorders",
        "symptoms": ["excessive worry", "restlessness", "fatigue", "difficulty concentrating", "irritability", "muscle tension", "sleep problems"],
        "medicines": ["SSRIs", "SNRIs", "Benzodiazepines (short term)", "Buspirone"],
        "home_remedies": ["Regular exercise", "Meditation and mindfulness", "Adequate sleep", "Limit caffeine and alcohol"],
        "recovery_time": "Varies; may require ongoing management",
        "precautions": ["Stress management", "Regular therapy sessions", "Avoid substance use"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const availableSymptomsList = document.getElementById('available-symptoms-list');
    const selectedSymptomsList = document.getElementById('selected-symptoms-list');
    const symptomSearch = document.getElementById('symptom-search');
    const predictBtn = document.getElementById('predict-btn');
    const resultsContent = document.getElementById('results-content');
    const noMatch = document.getElementById('no-match');
    const loader = document.getElementById('loader');

    // Extract all unique symptoms from the disease data
    const allSymptoms = new Set();
    diseaseData.forEach(disease => {
        disease.symptoms.forEach(symptom => {
            allSymptoms.add(symptom);
        });
    });

    const symptomsArray = Array.from(allSymptoms).sort();
    const selectedSymptoms = new Set();

    // Initial population of available symptoms
    populateAvailableSymptoms(symptomsArray);

    // Search functionality
    symptomSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredSymptoms = symptomsArray.filter(symptom => 
            !selectedSymptoms.has(symptom) && symptom.toLowerCase().includes(searchTerm)
        );
        populateAvailableSymptoms(filteredSymptoms);
    });

    // Function to populate available symptoms
    function populateAvailableSymptoms(symptoms) {
        availableSymptomsList.innerHTML = '';
        symptoms.forEach(symptom => {
            if (!selectedSymptoms.has(symptom)) {
                const symptomItem = document.createElement('div');
                symptomItem.className = 'symptom-item';
                symptomItem.innerHTML = `${symptom} <span class="symptom-action">+</span>`;
                symptomItem.addEventListener('click', () => {
                    selectedSymptoms.add(symptom);
                    updateSelectedSymptomsList();
                    updateAvailableSymptomsList();
                    updatePredictButton();
                });
                availableSymptomsList.appendChild(symptomItem);
            }
        });
    }

    // Function to update available symptoms list after selection
    function updateAvailableSymptomsList() {
        const searchTerm = symptomSearch.value.toLowerCase();
        const filteredSymptoms = symptomsArray.filter(symptom => 
            !selectedSymptoms.has(symptom) && symptom.toLowerCase().includes(searchTerm)
        );
        populateAvailableSymptoms(filteredSymptoms);
    }

    // Function to update selected symptoms list
    function updateSelectedSymptomsList() {
        selectedSymptomsList.innerHTML = '';
        selectedSymptoms.forEach(symptom => {
            const symptomItem = document.createElement('div');
            symptomItem.className = 'symptom-item';
            symptomItem.innerHTML = `${symptom} <span class="symptom-action">✕</span>`;
            symptomItem.addEventListener('click', () => {
                selectedSymptoms.delete(symptom);
                updateSelectedSymptomsList();
                updateAvailableSymptomsList();
                updatePredictButton();
            });
            selectedSymptomsList.appendChild(symptomItem);
        });
    }

    // Function to update predict button state
    function updatePredictButton() {
        predictBtn.disabled = selectedSymptoms.size === 0;
    }

    // Initialize predict button state
    updatePredictButton();

    // Predict disease based on selected symptoms
    predictBtn.addEventListener('click', () => {
        // Show loading state
        resultsContent.style.display = 'none';
        noMatch.style.display = 'none';
        loader.style.display = 'block';

        // Simulate API call delay
        setTimeout(() => {
            const results = predictDisease(Array.from(selectedSymptoms));
            displayResults(results);
            
            // Hide loading state
            loader.style.display = 'none';
        }, 1000);
    });

    // Function to predict disease based on symptoms
    function predictDisease(userSymptoms) {
        let bestMatch = null;
        let highestScore = 0;
        let matchScore = 0;

        diseaseData.forEach(disease => {
            const diseaseSymptoms = new Set(disease.symptoms);
            
            // Count matching symptoms
            const matchingSymptoms = userSymptoms.filter(symptom => diseaseSymptoms.has(symptom));
            const matchCount = matchingSymptoms.length;
            
            // Calculate match score as percentage of disease symptoms matched
            const diseaseScore = matchCount / disease.symptoms.length;
            
            // Calculate user input coverage (percentage of user symptoms matched)
            const userScore = matchCount / userSymptoms.length;
            
            // Combined score with more weight on disease coverage
            const combinedScore = (diseaseScore * 0.7) + (userScore * 0.3);
            
            if (combinedScore > highestScore) {
                highestScore = combinedScore;
                bestMatch = disease;
                matchScore = Math.round(combinedScore * 100);
            }
        });

        // Only return a match if score is above threshold
        if (highestScore > 0.3) {
            return {
                disease: bestMatch,
                confidence: matchScore
            };
        } else {
            return null;
        }
    }

    // Function to display results
    function displayResults(results) {
        if (results) {
            document.getElementById('disease-result').textContent = results.disease.disease;
            
            const confidenceBar = document.getElementById('confidence-bar');
            const confidenceText = document.getElementById('confidence-text');
            confidenceBar.style.width = `${results.confidence}%`;
            confidenceText.textContent = `Confidence: ${results.confidence}%`;
            
            // Determine color based on confidence
            if (results.confidence < 50) {
                confidenceBar.style.backgroundColor = '#e74c3c';
            } else if (results.confidence < 75) {
                confidenceBar.style.backgroundColor = '#f39c12';
            } else {
                confidenceBar.style.backgroundColor = '#2ecc71';
            }

            // Display medicines
            const medicinesResult = document.getElementById('medicines-result');
            medicinesResult.innerHTML = '';
            results.disease.medicines.forEach(medicine => {
                const medicineItem = document.createElement('div');
                medicineItem.className = 'result-item';
                medicineItem.textContent = medicine;
                medicinesResult.appendChild(medicineItem);
            });

            // Display home remedies
            const remediesResult = document.getElementById('remedies-result');
            remediesResult.innerHTML = '';
            results.disease.home_remedies.forEach(remedy => {
                const remedyItem = document.createElement('div');
                remedyItem.className = 'result-item';
                remedyItem.textContent = remedy;
                remediesResult.appendChild(remedyItem);
            });

            // Display recovery time
            document.getElementById('recovery-result').textContent = results.disease.recovery_time;

            // Display precautions
            const precautionsResult = document.getElementById('precautions-result');
            precautionsResult.innerHTML = '';
            results.disease.precautions.forEach(precaution => {
                const precautionItem = document.createElement('div');
                precautionItem.className = 'result-item';
                precautionItem.textContent = precaution;
                precautionsResult.appendChild(precautionItem);
            });

            resultsContent.style.display = 'block';
            noMatch.style.display = 'none';
        } else {
            resultsContent.style.display = 'none';
            noMatch.style.display = 'block';
        }
    }
});