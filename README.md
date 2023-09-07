# parsy-julien-ecf-DOM

* TP sur le DOM

## Notation des élèves

Dans cet exercice, l'utilisateur est un enseignant qui doit pouvoir noter ses élèves. Il faudra donc un tableau avec en colonne 1 le nom des élèves (une dizaine d'élèves), en colonne 2 le nom du devoir.

Il doit pouvoir évaluer par note ou par couleur. Il peut vouloir évaluer certains devoirs par note et d'autres devoirs par couleur, mais il n'y pas de relation entre le système de notation par couleur ou par note traditionnelle. Un devoir est, soit évalué par note, soit par couleur.

Les notes traditionnelles seront de 1 à 5. On ne peut mettre que ces 5 valeurs. Si l'utilisateur tape autre chose, il faut remettre la valeur à vide.Pour les couleurs il doit pouvoir mettre 4 couleurs (rouge, orange, jaune, vert). S'il note par couleur, les inputs devront tous être en couleur verte par défaut et il faudra meIre le focus sur le premier input. Ensuite, lorsque l'utilisateur tapera sur les touches 1, 2, 3, 4, on remplira la case de la couleur correspondante.
Avec la touche 1, on mettra la couleur rouge, la 2 la couleur orange, la 3 la couleur jaune et 4 la couleur verte. Il faut que le chiffre disparaisse avant de passer à la case suivante. On ne doit voir que la couleur sur les cases.

Il faut donc un bouton pour que l'u0lisateur nous dise avant de commencers'il note en couleur ou par note. Avant son choix, il ne doit pas pouvoir noter, donc les inputs doivent être cachés.
En fonction de son choix, il faudra tout d'abord que les inputs s'affichent et que le focus soit automatiquement positionné sur le premier input (soit le premier élève en réalité). Il faudra gérer les évènements pour qu'il puisse évaluer et que le focus passe automatiquement sur la case du dessous, donc sur l'élève suivant. Mais si la touche saisie ne correspond pas à celle que nous avons déterminé, rien ne doit se passer, nous ne devons pas passer le focus sur l'élève suivant.

## Ceci est la première version qu'il faut réaliser.

### Voici les premiers conseils :

    - Écrivez ce que vous devez faire, faites-vous une checklist et vous barrez au fur et à mesure que c'est réalisé, c'est très important. Cela permet de vous orienter et vous guider vers ce qu'il faut faire.

    - Lisez plusieurs fois l'énoncé et remplissez votre checklist en en essayant de traduire ce que vous lisez en langages informa0ques.

    Exemple : il faudra un tableau = en html je dois réaliser un tableau avec ```<table>``` donc regardez table comment ça fonc0onne sur le net si je ne me souviens pas.

    Exemple 2 : le focus soit automa0quement posi0onné sur le premier input = en javascript u0liser la méthode focus pour me posi0onner au bon endroit.

    Exemple 3 : on voit qu'il y aura une nota0on par note et une par couleur, on aura donc un bloc de condi0on avec if else. (Voir plus, voir d'autres conditions dans ce bloc)

    Exemple 4 : Que ça soit par note ou par couleur, le focus bougera automatiquement sur l'élève suivant. Il faut donc comprendre qu'on va faire deux fois la même chose à deux endroits différents dans notre code. 
    Dans le if (exemple) on exécutera le code par note et donc à un moment donné on changera le focus. Et dans le else (par exemple) on exécutera le code pour la notation par couleur et à un moment donné on changera le focus. Il est donc préférable d'écrire une fonc0on à part qu'on lancera quand on le souhaite pour changer le focus.


## Dans une première version améliorée.

Il faudra enregistrer les valeurs rentrées par l'enseignant dans le localstorage. Il faudrait donc un bouton reset en plus pour remettre à zéro les valeurs, que ça soit pour les couleurs ou pour les notes. Il faudra également penser aux utilisateurs qui n'ont pas de pad avec les chiffres et qui doivent donc utiliser shia pour saisir les numéros. Pour leur faciliter la vie on fera en sorte que les touches &,é, ", ' fonctionnent également. 
(& pour 1, é pour 2, " pour 3, ' pour 4)

Dans une deuxième version améliorée, il faudra ajouter plusieurs devoirs dans le tableau. Il faudra un bouton reset sous chaque devoir pour pouvoir remettre à zéro le devoir que l'on souhaite. Il faudra aussi un bouton de reset général pour tous les devoirs selon le système de notation.


