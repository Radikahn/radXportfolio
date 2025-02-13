from matplotlib.dates import YearLocator
from driver_data_plot import *

class user_interface:
    import traceback
    import logging
    import driver_data
    import driver_data_plot
    from datetime import datetime

    

    
    def collect_driver():
        import logging
        import traceback
        from datetime import datetime

        current_year = datetime.now().year

        try:
            year = int(input("Enter season Year (Ex = 2019): "))
            race_number = int(input("Number of race in the year: "))
            race_type = input("Enter event (FP1 = free prac 1, Q1 = qualifying 1): ")
            driver = input("First 3 letters of driver's last name (Ex: Hamilton = HAM): ")


            driver =  driver_data.driver_data(year, race_number, race_type, driver)

            return driver

        except Exception as e:
            if year > current_year:
                    print("Year is not possible")
            else:
                logging.error(traceback.format_exc())

    def ask_compare():
         import logging
         import traceback


         try:
              response = input("Would you like to compare to another driver? (y/n) ")

              return True
         
         except Exception as e:
                logging.error(traceback.format_exc())
                   



    driver1 =  collect_driver()
    plot = driver_data_plot.driver_data_plot(driver1)


    if ask_compare():
        other_driver = collect_driver()

        plot.speed_time_compare(other_driver)

