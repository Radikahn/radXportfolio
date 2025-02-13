from numpy import character
import driver_data 
import fastf1

class driver_data_plot:
    
    driver: driver_data
    
    def __init__(self, driver: driver_data):
        self.driver = driver
     
    def speed_time_plot(self):
        from matplotlib import pyplot as plt
        import fastf1
        import fastf1.plotting
               
        
        t1 = self.driver.get_driver_car_data()['Time']
        vCar1 = self.driver.get_driver_car_data()['Speed']
        
        
        fig, ax = plt.subplots()
        ax.plot(t1, vCar1, label="speed")
        ax.set_xlabel('Time (seconds)')
        ax.set_ylabel('Speed (KM/H)')
        ax.set_title(f'{self.driver.get_driver_name()} speed in {self.driver.get_race_type()} {self.driver.get_race_number()} of {self.driver.get_year()}')
        ax.legend()
        plt.show()
        
    def speed_time_compare(self, other_driver: driver_data):
        from matplotlib import pyplot as plt
        import fastf1
        import fastf1.plotting
               
        
        t1 = self.driver.get_driver_car_data()['Time']
        vCar1 = self.driver.get_driver_car_data()['Speed']
        
        t2 = other_driver.get_driver_car_data()['Time']
        vCar2 = other_driver.get_driver_car_data()['Speed']
    
        
        fig, ax = plt.subplots()
        ax.plot(t1, vCar1, label = self.driver.get_driver_name())
        ax.plot(t2, vCar2, label = other_driver.get_driver_name())
        ax.set_xlabel('Time (seconds)')
        ax.set_ylabel('Speed (KM/H)')
        ax.set_title(f'{self.driver.get_driver_name()} speed in {self.driver.get_race_type()} {self.driver.get_race_number()} of {self.driver.get_year()}')
        ax.legend()
        plt.show()

