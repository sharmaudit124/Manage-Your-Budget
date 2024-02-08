# Budget Mobile App with Expo

## Problem Statement

Create a mobile app for managing the monthly home budget. The app should allow the user to save monthly planned and actual expenditures per item. For this assignment, focus on implementing the save module of the app.

## Requirements

### Budget Entry Screen

**Use Case:** User can enter per item budget details.

**Functional Requirements:**
1. Screen has the title ‘Budget entry’.
2. Input fields:
   - Name of the item (e.g., Sports, Education, Grocery, Entertainment, etc.).
   - Planned amount (e.g., 1000).
   - Actual amount (e.g., 200).
3. Save button to save the item in a memory-based list.
4. Show items button to navigate to the ‘Budget entries listing’ screen.
(Assumption : Actual amount cannot Planned Amount.)

### Budget Entry Listing Screen

**Use Case:** User can see all saved budget entries.

**Functional Requirements:**
1. Screen has a title ‘Budget entry listing’.
2. List of entries saved in the memory-based list.
3. Fields in the list are Name of the items like Sports, Education, etc.

## Technical Requirements

1. Use Expo for building and managing the project.
2. Use Redux for state management.
3. Data should persist even after the app is closed.
4. Use Material UI for styling purposes only.

## Getting Started with Expo

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Expo](https://docs.expo.dev/get-started/installation/) installed globally.
- **Java 17 :** installed on your machine
- **Expo Mobile App :** make sure to download expo app in your mobile device.

### Installation

1. Extract the contents of the zip file.

2. Open a terminal and change into the project directory:

   ```bash
   cd path/to/budget-mobile

3. Install dependencies:

    ```bash
    npm install

4. Running the App using Expo:

    ```bash
    npx expo start -- --tunnel

5. Now open your expo app and scan the QR code and there you go!

## Data Persistence

Data is stored using Redux (async-storage), ensuring that the state is preserved even after the app is closed.

## ***Note*** 
Sample Images are given in the smaple-Images folder.


