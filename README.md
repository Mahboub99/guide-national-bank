### Creating a build (build.zip)
- Run the following command in the terminal:
```bash
$ npm run zip:build
```

### Running the final zip file (build.zip)
- Run the following command in the terminal:
```bash
$ npm run zip:test-run
```

### Updating the groups/units
- Update in `src/pages/Registr/selector.js`

### Updating training platforms (Linkedin, Moody, etc...)
- For the names and adding, removing, updating => Update the `src/components/Elearning/Elearning.jsx`
- For the info and description => Update the component mentioned in `src/components/Elearning/Elearning.jsx`

### Updating English learning platforms
- For the names, images and adding, removing, updating => Update the `src/components/EnglishLearning/EnglishLearning.jsx`
- For links => Update the `src/components/EnglishLearningRoller/EnglishLearningRoller.jsx`
- For their count, update roller limits and movement functions in `src/components/EnglishLearningRoller/EnglishLearningRoller.jsx` 