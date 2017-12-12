# Messaging app for PV247

## Useful Commands
- make test => launches tests 💪
- make dev  => to run app locally (port 3000)
- make lint => test & fix lint errors

## Deployment
App is deployed to https://pv247.herokuapp.com. Feel free to explore. Just be aware that it is running on dyno instance - first request will take some time 😱

## How to test functionality
You can go to https://pv247.herokuapp.com and log-in using `test@one.com` and `test@two.com` accounts (passwords are ignored, they are provided only so app looks a bit more real). ⚠️ Be aware that first request will take longer as it is free dyno.

## Notes
- I have decided to use different approach for some things 💪. I am using `next.js` for building app - it makes it easy to update to new version (they are doing most of the work), can be easily tweaked to support SSR(even though this app doesn't need it). And of course it reduces time spent with setuping webpack etc...
- I have decided to use `redux-observable` for side effects as I consider it better approach than `redux-thunk`s (for bigger apps it scales better and more complex scenarios are easier with redux observable) 👀
- I have used `jest` for testing ⚠️
- I have used lint rules that I love 😍
- Password are not used during sign-in/sign-up (just looks better visually if they are there)
