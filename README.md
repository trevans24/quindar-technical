# Solution Overview

This project retrieves and displays SpaceX launch data using Apollo Client and GraphQL. Instead of using an antd `Table`, a custom Launch Card component has been implemented to present launch details in a more intuitive and visually appealing way. The application:

- Fetches **both historical and upcoming launches** from the SpaceX GraphQL API.
- Displays launches in a responsive grid layout instead of a standard table.
- Uses expandable cards that allow users to view more details about a specific launch when clicked.
- Implements Apollo Client caching for optimized performance and reduced redundant requests.
- Uses client-side fetching to support interactivity and potential real-time updates.

## Productionization & Next Steps

If this feature were to be productionized, the following improvements would be made:

1. Error Handling & Loading States

Improve UI feedback during data fetching (e.g., skeleton loaders instead of simple text-based loading indicators).

Add retry logic for failed API calls.

Implement error boundaries to gracefully handle unexpected API failures.

2. Performance Optimization

Implement pagination or infinite scrolling to handle large datasets efficiently.

Optimize cache policies to avoid redundant network requests.

3. Testing & Quality Assurance: One or any of the following

Unit tests using Jest and React Testing Library to validate component rendering and interactions.

Integration tests to ensure API calls and data-fetching logic work as expected.

End-to-end tests using Cypress or Playwright to simulate real user interactions.

4. Enhanced UI/UX

Add filtering options (e.g., search by rocket name, success/failure status).

Improve accessibility (ARIA attributes, keyboard navigation support).

Implement animations/transitions for a smoother user experience.

5. Other Considerations

Evaluate WebSockets or GraphQL subscriptions to enable real-time updates, if this data were updating more frequently
