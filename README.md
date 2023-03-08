# Obs
Aqui é na mão, mas o Nx aparentemente é melhor

# Create a workspace
```
ng new <repo-name> --create-application false
```

## Create a project inside the workspace
```
ng g application <app-name> --routing --style=scss
```
## Create a shared library
```
ng g lib <library-name>
```

## Run project
```
ng serve <project-name>
```
## Create a component
```
ng g c <diretory>/<component-name> --project=<project-name>
```

## Build
### *Is not allow build libs or shared projects
```
ng build --project <project-name>
```
