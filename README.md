# Google Maps Business Scraper

## Overview

The **Google Maps Business Scraper** is a powerful tool designed to extract business information from Google Maps. This project is ideal for developers, marketers, and researchers who need to gather data such as business names, addresses, phone numbers, ratings, reviews, and more from Google Maps listings. The scraper is built with scalability and efficiency in mind, making it suitable for both small and large-scale data extraction tasks.

## Features

- **Business Data Extraction**: Extract detailed information about businesses, including name, address, phone number, website, ratings, reviews, and more.
- **Customizable Search**: Search for businesses by location, category, or keyword.
- **Scalable**: Designed to handle large-scale scraping tasks efficiently.
- **Easy to Use**: Simple setup and configuration for quick deployment.
- **Export Options**: Save extracted data in various formats (e.g., CSV, JSON).

## Technologies Used

- **Python**: The primary programming language used for the scraper.
- **Selenium**: Used for web automation and interacting with Google Maps.
- **BeautifulSoup**: For parsing HTML and extracting data.
- **Pandas**: For data manipulation and exporting to CSV.
- **CSV/JSON Libraries**: For saving extracted data in structured formats.

## Getting Started

### Prerequisites

- Python 3.7 or higher
- pip (Python Package Installer)
- Google Chrome (or another browser supported by Selenium)
- ChromeDriver (matching your Chrome version)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MaximVanchev/GoogleMapsBusinessScraper.git
   cd GoogleMapsBusinessScraper
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Download ChromeDriver**:
   - Download the version of ChromeDriver that matches your Chrome browser version from [here](https://sites.google.com/chromium.org/driver/).
   - Place the `chromedriver` executable in the project directory or add it to your system's PATH.

4. **Configure the scraper**:
   - Open `config.py` and modify the search parameters (e.g., location, business category, etc.) as needed.

5. **Run the scraper**:
   ```bash
   python scraper.py
   ```

6. **Export data**:
   - The extracted data will be saved in the `output/` directory in CSV or JSON format.

## Usage

### Customizing the Search

You can customize the search by modifying the `config.py` file. Here are some of the key parameters you can adjust:

- **location**: The geographic location to search for businesses (e.g., "New York, NY").
- **query**: The type of business or keyword to search for (e.g., "restaurants").
- **max_results**: The maximum number of results to scrape.

### Example Configuration

```python
# config.py
location = "San Francisco, CA"
query = "coffee shops"
max_results = 50
```

### Running the Scraper

After configuring the search parameters, simply run the scraper:

```bash
python scraper.py
```

The scraper will open a Chrome browser window, perform the search, and extract the data. Progress will be displayed in the terminal.

### Output

The extracted data will be saved in the `output/` directory. By default, the data is saved in CSV format, but you can modify the code to save it in JSON or other formats if needed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## Acknowledgments

- Special thanks to all contributors who have helped improve this project.
- Inspired by the need for efficient and scalable web scraping tools.

## Contact

For any questions or suggestions, please feel free to reach out:

- **Maxim Vanchev**
- GitHub: [MaximVanchev](https://github.com/MaximVanchev)
- Email: maxim.van.mv@gmail.com

---

Thank you for using the Google Maps Business Scraper! We hope it helps you gather the data you need efficiently. Happy scraping! 🚀
