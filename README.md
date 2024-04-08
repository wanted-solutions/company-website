# company-website
WANTED.solutions website.

## About The Project

This repository hosts the source code for the official website of Wanted Solutions. As a pioneering provider of innovative software solutions and consulting services, our company is dedicated to leveraging the power of technology to foster business growth, enhance efficiency, and secure a competitive advantage for our clients. Our website, developed using [Jekyll](https://jekyllrb.com/), showcases our extensive range of services, our mission, and the expertise that makes us stand out in the digital landscape.

## Our Mission

At Wanted Solutions, our mission is to empower businesses with state-of-the-art technology solutions that drive success in the digital era. We commit to delivering unparalleled value through our comprehensive expertise, creative approaches, and a steadfast dedication to our clients' achievements.

## Getting Started

To get the site running locally:

1. Ensure Ruby is installed and managed by rbenv on your system.
2. Clone the repository: `git clone https://github.com/wanted-solutions/company-website.git`
3. Navigate into the project directory: `cd company-website`
4. Install the specific Ruby version used for the project (if not already installed): `rbenv install $(cat .ruby-version)`
5. Set the local environment to use the project's Ruby version: `rbenv local $(cat .ruby-version)`
6. Install Bundler: `gem install bundler`
7. Install dependencies: `bundle install`
8. Serve the website locally: `bundle exec jekyll serve`

Visit `http://localhost:4000` to view the site.

If you encounter issues related to Content Security Policy, especially concerning loading images or executing scripts, you can temporarily disable the policy for local testing. To do this, comment out the Content Security Policy meta tag in the layouts/wanted-article.html and layouts/wanted-website.html files by adding a comment symbol (<!-- -->) around the line: /<!-- <meta http-equiv="Content-Security-Policy" content="{{ site.http_csp }}"> /-->


## Contributing

While we value the spirit of community and collaboration, this project is not open for public contributions. It is provided for informational purposes only. We appreciate your interest and encourage you to reach out to us directly at ping@wanted.solutions for any inquiries or potential collaboration opportunities.


## License

This project is available for browsing with no right to use, copy, modify, or distribute any part of it. It is provided for informational purposes only. All rights are reserved by the original authors and contributors. For any further use outside of viewing, please contact us directly at ping@wanted.solutions.


## Contact

For any inquiries, please reach out to us at ping@wanted.solutions.
