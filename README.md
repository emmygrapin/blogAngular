# blogAngular
Exercice Blog Angular Open Classrooms

1° Récupérer le projet en faisant la commande git clone.
Vous récupérerez un dossier app .

2° Créer votre projet avec la commande
ng new blogEmmyGrapin --style=scss --skip-tests=true

3° Déplacez vous à la racine de blogEmmyGrapin

4°Installez bootstrap avec la commande
npm install bootstrap@3.3.7 --save

5° Remplacez  dans le fichier angular.json par 
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.scss"
            ],

6° Remplacez le dossier app dans src par celui récupéré.

7° Lancez le serveur à la racine du projet
ng serve

8° localhost:4200
