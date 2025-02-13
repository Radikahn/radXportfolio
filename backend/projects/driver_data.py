import fastf1
import fastf1.plotting

class driver_data:  
    
    name_driver: str
    year: int
    race_number: int
    race_type: str
    driver_car_data: fastf1
    
    
    def __init__(self, year: int, race_number: int, race_type: str, driver: str):
        import fastf1
        import fastf1.plotting

        self.name_driver = driver
        self.year = year
        self.race_number = race_number
        self.race_type = race_type
        
        
        session = fastf1.get_session(year, race_number, race_type)
        session.load()
        
        fast_driver = session.laps.pick_driver(driver).pick_fastest()
        self.driver_car_data = fast_driver.get_car_data()
        
        
        
        
        
    
    def get_driver_name(self):
        return self.name_driver
    
      
    def get_year(self):
        return self.year
    
      
    def get_race_number(self):
        return self.race_number
    
      
    def get_race_type(self):
        return self.race_type
    
      
    def get_driver_car_data(self):
        return self.driver_car_data

