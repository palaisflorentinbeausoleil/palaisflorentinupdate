import { useEffect, useState } from 'react';

const CalendrierLodgify = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // Fonction pour naviguer entre les mois
  const goToPreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Fonction pour obtenir les jours du mois
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Ajouter les jours du mois précédent pour remplir la première semaine
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Ajouter tous les jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  // Fonction pour vérifier si une date est disponible (simulation)
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Simulation : dates disponibles à partir d'aujourd'hui + 7 jours
    return diffDays >= 7 && diffDays <= 365;
  };

  // Fonction pour obtenir le prix (simulation)
  const getPrice = (date: Date) => {
    const month = date.getMonth();
    const day = date.getDay();
    
    // Prix de base selon la saison
    let basePrice = 250;
    
    // Haute saison (juin-août)
    if (month >= 5 && month <= 7) {
      basePrice = 350;
    }
    // Très haute saison (juillet-août)
    if (month === 6 || month === 7) {
      basePrice = 450;
    }
    
    // Weekend plus cher
    if (day === 0 || day === 6) {
      basePrice += 50;
    }
    
    return basePrice;
  };

  // Fonction pour sélectionner une date
  const toggleDateSelection = (date: Date) => {
    if (!isDateAvailable(date)) return;
    
    setSelectedDates(prev => {
      const isSelected = prev.some(d => d.toDateString() === date.toDateString());
      if (isSelected) {
        return prev.filter(d => d.toDateString() !== date.toDateString());
      } else {
        return [...prev, date];
      }
    });
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  return (
    <div className="lodgify-calendar-container">
      {/* Styles personnalisés */}
      <style>
        {`
          .lodgify-calendar-container {
            font-family: 'Montserrat', sans-serif;
          }
          
          .calendar-header {
            background: hsl(210 35% 17%);
            color: hsl(40 25% 96%);
            border-radius: 0.75rem 0.75rem 0 0;
            padding: 1.5rem;
            text-align: center;
            font-weight: 600;
            font-size: 1.25rem;
          }
          
          .calendar-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            background: hsl(40 25% 96%);
            border-bottom: 1px solid hsl(32 25% 88%);
          }
          
          .calendar-nav button {
            background: hsl(40 45% 57%);
            color: hsl(210 35% 17%);
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
          }
          
          .calendar-nav button:hover {
            background: hsl(40 45% 45%);
            transform: translateY(-1px);
          }
          
          .calendar-weekdays {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            background: hsl(32 30% 80%);
            color: hsl(210 35% 17%);
            font-weight: 600;
            padding: 1rem 0;
            text-align: center;
            border-bottom: 1px solid hsl(32 25% 88%);
          }
          
          .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            background: hsl(0 0% 100%);
          }
          
          .calendar-day {
            border: 1px solid hsl(32 25% 88%);
            padding: 1rem 0.5rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            min-height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .calendar-day:hover {
            background: hsl(40 25% 96%);
            border-color: hsl(40 45% 57%);
          }
          
          .calendar-day.available {
            background: hsl(40 45% 57%);
            color: hsl(210 35% 17%);
            font-weight: 600;
          }
          
          .calendar-day.available:hover {
            background: hsl(40 45% 45%);
            transform: scale(1.05);
          }
          
          .calendar-day.unavailable {
            background: hsl(0 0% 95%);
            color: hsl(0 0% 70%);
            cursor: not-allowed;
          }
          
          .calendar-day.selected {
            background: hsl(210 35% 17%);
            color: hsl(40 25% 96%);
            font-weight: 700;
            box-shadow: 0 0 0 3px hsl(40 45% 57%);
          }
          
          .calendar-day.empty {
            background: hsl(40 25% 96%);
            border: none;
          }
          
          .calendar-price {
            font-size: 0.75rem;
            font-weight: 600;
            color: hsl(40 45% 57%);
            margin-top: 0.25rem;
          }
          
          .calendar-day-number {
            font-size: 1.125rem;
            font-weight: 500;
          }
          
          .calendar-legend {
            background: hsl(40 25% 96%);
            padding: 1.5rem;
            border-radius: 0 0 0.75rem 0.75rem;
            border-top: 1px solid hsl(32 25% 88%);
          }
          
          .legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }
          
          .legend-color {
            width: 1rem;
            height: 1rem;
            border-radius: 0.25rem;
          }
        `}
      </style>
      
      {/* Calendrier personnalisé */}
      <div className="lodgify-calendar">
        <div className="calendar-header">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        
        <div className="calendar-nav">
          <button onClick={goToPreviousMonth}>
            ← Mois précédent
          </button>
          <button onClick={goToNextMonth}>
            Mois suivant →
          </button>
        </div>
        
        <div className="calendar-weekdays">
          <div>Dim</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mer</div>
          <div>Jeu</div>
          <div>Ven</div>
          <div>Sam</div>
        </div>
        
        <div className="calendar-grid">
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !day ? 'empty' : 
                isDateAvailable(day) ? 'available' : 'unavailable'
              } ${
                selectedDates.some(d => d.toDateString() === day?.toDateString()) ? 'selected' : ''
              }`}
              onClick={() => day && toggleDateSelection(day)}
            >
              {day && (
                <>
                  <div className="calendar-day-number">
                    {day.getDate()}
                  </div>
                  {isDateAvailable(day) && (
                    <div className="calendar-price">
                      {getPrice(day)}€
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className="calendar-legend">
          <h4 className="font-semibold text-[hsl(210_35%_17%)] mb-3">Légende</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="legend-item">
              <div className="legend-color bg-[hsl(40_45%_57%)]"></div>
              <span className="text-sm text-[hsl(0_0%_55%)]">Disponible</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-[hsl(0_0%_95%)] border border-[hsl(32_25%_88%)]"></div>
              <span className="text-sm text-[hsl(0_0%_55%)]">Non disponible</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-[hsl(210_35%_17%)]"></div>
              <span className="text-sm text-[hsl(0_0%_55%)]">Sélectionné</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-[hsl(40_45%_57%)]"></div>
              <span className="text-sm text-[hsl(0_0%_55%)]">Prix par nuit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendrierLodgify;
