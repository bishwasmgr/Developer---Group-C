from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Set up the WebDriver (make sure to provide the correct path to your WebDriver)
driver = webdriver.Chrome(executable_path='path/to/chromedriver')

# Open the web application
driver.get("file:///path/to/your/index.html")  # Adjust the path accordingly

# Test the contact form
try:
    # Locate the input fields and fill them out
    name_input = driver.find_element(By.ID, "name")
    email_input = driver.find_element(By.ID, "email")
    message_input = driver.find_element(By.ID, "message")

    name_input.send_keys("John Doe")
    email_input.send_keys("john.doe@example.com")
    message_input.send_keys("Hello, this is a test message!")

    # Submit the form
    message_input.send_keys(Keys.RETURN)

    # Wait for the response to show up
    time.sleep(2)

    # Check if the response is displayed
    response = driver.find_element(By.ID, "response")
    assert response.is_displayed(), "Response message not displayed!"

    print("Test Passed: Response message is displayed.")

except Exception as e:
    print("Test Failed:", str(e))

finally:
    # Close the browser
    driver.quit()
