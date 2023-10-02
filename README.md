# API Health Checker Dashboard

## Introduction
API Health Checker Dashboard is a vital tool for monitoring the availability of backend services integrated with your projects. This dashboard, was forked from [Osanda Deshan](https://github.com/osandadeshan/api-health-checker-dashboard) and now updated by Hoseacodes, offers real-time insights into the status of your services, making it easier to ensure seamless operation.

![Demo App](https://user-images.githubusercontent.com/9147189/135744321-a4f58864-7331-4097-b83c-43edb2940d5a.png)

## Advantages
* **Ease of Service Availability**: Quickly identify unavailable backend services.
* **Real-time Updates**: Services' statuses are updated in real-time at customizable intervals (default is 30 seconds).
* **Effortless Integration**: Easily integrate your services.
* **Manage Multiple Environments**: Maintain multiple environments with separate JSON files.
* **No CORS Worries**: No need to concern yourself with [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
* **Web and Mobile-Friendly**: Enjoy a user-friendly UI on both web and mobile.
* **Free and Open-Source**: This tool is free to use and open-source.

## Architecture
![Architecture](https://user-images.githubusercontent.com/9147189/135319309-3a8eda05-dc29-4df0-be03-5b921b17a822.PNG)

## API Health Checker Dashboard vs. Dynatrace Dashboard
| Criteria                     | API Health Checker Dashboard                           | Dynatrace Dashboard                                            |
|------------------------------|--------------------------------------------------------|----------------------------------------------------------------|
| Real-time Monitoring         | Yes                                                    | Minimum interval is 5 minutes                                  |
| Historical View              | Not yet implemented                                    | Yes                                                            |
| Integrating Backend Services | Update in a single file                                | Create HTTP monitors per service and add them to the dashboard |
| Managing Environments​       | Maintain multiple environments via multiple JSON files | Create multiple HTTP monitors per each environment and service |
| Cost                         | Free and Open-Source                                   | Paid tool                                                      |

## How to Use?
**Prerequisites:**
* [Node](https://nodejs.org/en/download/)
* [VSCode](https://code.visualstudio.com/download)

**Steps:**
1. Clone this project.
2. Open the project in VSCode.
3. Update the JSON files located in "***api-health-checker-dashboard/config***" with your Backend services' health routes.
4. Save the changes.
5. Open a terminal from VSCode.
6. Execute ***`npm install`*** to install the node modules.
7. Execute ***`npm run dev`*** to start the node application.
8. Open the web application from http://localhost:5000.

**Note:** You won't face [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) because this application has a proxy layer to solve that problem. You can deploy this application as a node application.

## Deployment
You can deploy this as a sample node application.

**Sample dashboard deployed: [API Health Checker Dashboard Demo](https://osandadeshan-api-health-checker-dashboard.glitch.me/)**

## License
[![MIT License](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/License_icon-mit-2.svg/2000px-License_icon-mit-2.svg.png)](https://opensource.org/licenses/MIT) [API Health Checker Dashboard](https://medium.com/api-health-checker) is released under the [MIT License](https://opensource.org/licenses/MIT).

