---
title: "Avertissement : invalid ARIA prop"
layout: single
permalink: warnings/invalid-aria-prop.html
---

Propriété ARIA invalide. Cet avertissement survient lorsque vous tentez d’afficher un élément DOM avec une prop `aria-*` qui n’existe pas dans la [spécification](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties) *Web Accessibility Initiative* (WAI) *Accessible Rich Internet Application* (ARIA).

1. Si vous avez le sentiment que vous utilisez une prop valide, vérifiez attentivement son orthographe.  `aria-labelledby` et `aria-activedescendant` sont souvent mal orthographiées.

2. React ne reconnaît pas encore l’attribut que vous avez spécifié. Ça va sans doute être corrigé dans une prochaine version de React. Néanmoins, React supprime pour le moment tous les attributs qu’il ne connaît pas, en conséquence même si vous spécifiez de tels attributs, React ne les exploitera pas.

3. Otherwise, if you're on the latest version of React DOM and verified that you're using a valid property name listed in the ARIA specification, please [report a bug](https://github.com/facebook/react/issues/new/choose).
