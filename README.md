# Messaging app for PV247

## Useful Commands
- make test => launches tests 💪
- make dev  => to run app locally (port 3000)
- make lint => test & fix lint errors

## Deployment
App is deployed to https://pv247.herokuapp.com. Feel free to explore. Just be aware that it is running on dyno instance - first request will take some time 😱

## Notes
- I have decided to use different approach to some things. I am using `next.js` for building app - it makes it easy to update to new version (they are doing most of the work), can be easily tweaked to support SSR(event though this app doesn't need it). And of course it reduces time spent with setuping webpack etc...
- I have decided to use redux-observable for side effects as I see it better approach than redux-thunks (for bigger apps it scales better and more complex scenarios are easier with redux observable)
- I have used `jest` for testing 👍
- Lint rules that I love 😍