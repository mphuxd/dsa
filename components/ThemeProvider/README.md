# ThemeProvider

The ThemeProvider is a crucial part the application and must be the root component. All components depend on the ThemeProvider to define themes and styles which are used to style the components properly.

The ThemeProvider allows users to easily switch between themes, such as light and dark mode. The theme prop takes a theme object of css modules containing all of the theme's css variables. When the ThemeContext's colorScheme changes, the ThemeProvider applies the corresponding colorScheme class containing theme css variables which components styles reference.
