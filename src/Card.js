import { render } from "@testing-library/react";
import React from "react";

export function FirstCard() {
    const nb = 1;
    const title = 'React JS'
    return (
        <div>

            <strong>
                Framework N°{nb} : {title}
            </strong>
            <div>
                <i>React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</i>
            </div>

        </div>
    );
}

export function SecondCard() {
    const nb = 2;
    const title = 'Angular JS'
    return (
        <div>
        
            <strong>
                Framework N°{nb} : {title}
            </strong>
            <div>
                <i>AngularJS est un framework JavaScript libre et open source développé par Google. Il permet de développer des pages web. AngularJS est fondé sur l'idée que la programmation déclarative doit être utilisée pour construire les interfaces utilisateurs et les composants logiciels de câblage, tandis que la programmation impérative excelle pour exprimer la logique métier</i>
            </div>

        </div>
    );
}

export function ThirdCard() {
    const nb = 3;
    const title = 'Vue JS'
    return (
        <div>
        
            <strong>
                Framework N°{nb} : {title}
            </strong>
            <div>
                <i>React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</i>
            </div>

        </div>
    );
}