        const materialDatabase = {
            
            'plastic': { percent: 80, name: 'Plastic', info: 'Most plastics are petroleum-based with high carbon content' },
            'bottle': { percent: 75, name: 'Plastic Bottle' },
            'bag': { percent: 85, name: 'Plastic Bag' },
            
            
            'wood': { percent: 45, name: 'Wood', info: 'Wood contains cellulose and lignin with moderate carbon content' },
            'paper': { percent: 42, name: 'Paper' },
            'cardboard': { percent: 43, name: 'Cardboard' },
            'book': { percent: 44, name: 'Book' },
            
            
            'metal': { percent: 2, name: 'Metal', info: 'Pure metals contain almost no carbon, but alloys may have some' },
            'aluminum': { percent: 0, name: 'Aluminum' },
            'steel': { percent: 1.5, name: 'Steel' },
            'iron': { percent: 0.5, name: 'Iron' },
            
            
            'cotton': { percent: 42, name: 'Cotton', info: 'Natural fibers have moderate carbon content' },
            'wool': { percent: 48, name: 'Wool' },
            'polyester': { percent: 65, name: 'Polyester' },
            'nylon': { percent: 63, name: 'Nylon' },
            
            
            'rubber': { percent: 78, name: 'Rubber' },
            'glass': { percent: 0, name: 'Glass', info: 'Glass is primarily silica with no carbon content' }
        };

        function calculate() {
            const objectInput = document.getElementById('objectName').value.toLowerCase();
            if (!objectInput) {
                alert("Please enter an object name");
                return;
            }
            
           
            let bestMatch = { percent: 30, name: 'Unknown Material', info: 'General organic material estimate' };
            let highestScore = 0;
            
            for (const [keyword, data] of Object.entries(materialDatabase)) {
                if (objectInput.includes(keyword)) {
                   
                    if (keyword.length > highestScore) {
                        highestScore = keyword.length;
                        bestMatch = data;
                    }
                }
            }
            
           
            const variation = (Math.random() * 10) - 5; 
            const carbonPercent = Math.max(0, Math.min(100, bestMatch.percent + variation)).toFixed(1);
            
            const impact = getImpactLevel(carbonPercent);
            const impactColor = getImpactColor(impact);
            
            document.getElementById('result').innerHTML = `
                <p>${bestMatch.name} contains approximately <span style="color:${impactColor}">${carbonPercent}% carbon</span></p>
                <p>Environmental impact: <span style="color:${impactColor}">${impact}</span></p>
            `;
            

            const infoDiv = document.getElementById('materialInfo');
            infoDiv.innerHTML = bestMatch.info ? `<p>${bestMatch.info}</p>` : '';
        }
        
        function getImpactLevel(percent) {
            percent = parseFloat(percent);
            if (percent < 10) return "Very Low";
            if (percent < 30) return "Low";
            if (percent < 60) return "Moderate";
            if (percent < 80) return "High";
            return "Very High";
        }
        
        function getImpactColor(impact) {
            switch(impact) {
                case "Very Low": return "#2ecc71";
                case "Low": return "#27ae60";
                case "Moderate": return "#f39c12";
                case "High": return "#e74c3c";
                case "Very High": return "#c0392b";
                default: return "#000";
            }
        }