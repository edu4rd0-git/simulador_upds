const programacion1 = [
    {
        numb: 1,
        question: "¿Qué es un algoritmo?",
        answer: "Una secuencia ordenada y finita de pasos para resolver un problema",
        options: [
            "Una secuencia ordenada y finita de pasos para resolver un problema",
            "Un lenguaje de programación de bajo nivel",
            "Un componente físico de la computadora",
            "Un error de sintaxis en el código"
        ]
    },
    {
        numb: 2,
        question: "¿Qué es una variable en programación?",
        answer: "Un espacio en memoria que almacena un dato que puede cambiar",
        options: [
            "Un valor fijo que nunca se modifica",
            "Un espacio en memoria que almacena un dato que puede cambiar",
            "Una instrucción para repetir un bloque de código",
            "El resultado final de un programa"
        ]
    },
    {
        numb: 3,
        question: "¿Cuál es la diferencia principal entre una variable y una constante?",
        answer: "El valor de la constante no cambia durante la ejecución del programa",
        options: [
            "La constante solo guarda texto y la variable solo números",
            "La variable no ocupa espacio en la memoria RAM",
            "El valor de la constante no cambia durante la ejecución del programa",
            "No existe ninguna diferencia entre ambas"
        ]
    },
    {
        numb: 4,
        question: "¿Qué tipo de dato se utiliza para almacenar valores de verdadero o falso?",
        answer: "Booleano (Boolean)",
        options: [
            "Entero (Integer)",
            "Cadena de texto (String)",
            "Flotante (Float)",
            "Booleano (Boolean)"
        ]
    },
    {
        numb: 5,
        question: "¿Qué tipo de dato almacena números con decimales?",
        answer: "Flotante o Real (Float / Double)",
        options: [
            "Entero (Int)",
            "Flotante o Real (Float / Double)",
            "Carácter (Char)",
            "Booleano (Bool)"
        ]
    },
    {
        numb: 6,
        question: "¿Qué es un diagrama de flujo?",
        answer: "La representación gráfica de un algoritmo mediante símbolos",
        options: [
            "La representación gráfica de un algoritmo mediante símbolos",
            "Un programa para editar texto sin formato",
            "La memoria principal del procesador",
            "Un tipo de base de datos relacional"
        ]
    },
    {
        numb: 7,
        question: "¿Qué es el pseudocódigo?",
        answer: "Una descripción informal de un algoritmo usando lenguaje natural y estructuras de programación",
        options: [
            "Un código encriptado para seguridad informática",
            "Una descripción informal de un algoritmo usando lenguaje natural y estructuras de programación",
            "Un virus que afecta al compilador",
            "El lenguaje binario que entiende el hardware"
        ]
    },
    {
        numb: 8,
        question: "¿Cuál es la función de un compilador?",
        answer: "Traducir todo el código fuente a lenguaje máquina antes de ejecutarlo",
        options: [
            "Ejecutar el programa línea por línea sin traducirlo",
            "Diseñar la interfaz gráfica del usuario",
            "Traducir todo el código fuente a lenguaje máquina antes de ejecutarlo",
            "Corregir automáticamente los errores lógicos"
        ]
    },
    {
        numb: 9,
        question: "¿Cuál de los siguientes es un operador relacional o de comparación?",
        answer: ">=",
        options: [
            "+=",
            "&&",
            ">=",
            "++"
        ]
    },
    {
        numb: 10,
        question: "¿Qué operador lógico devuelve verdadero solo si ambas condiciones son verdaderas?",
        answer: "AND (&&)",
        options: [
            "OR (||)",
            "NOT (!)",
            "AND (&&)",
            "XOR (^)"
        ]
    },
    {
        numb: 11,
        question: "¿Qué operador se usa comúnmente para obtener el residuo de una división entera?",
        answer: "Módulo (%)",
        options: [
            "División (/)",
            "Módulo (%)",
            "Multiplicación (*)",
            "Potencia (**)"
        ]
    },
    {
        numb: 12,
        question: "¿Para qué sirve la estructura condicional 'if - else'?",
        answer: "Para tomar decisiones y ejecutar distintos bloques según se cumpla o no una condición",
        options: [
            "Para repetir un código exactamente diez veces",
            "Para declarar variables globales",
            "Para tomar decisiones y ejecutar distintos bloques según se cumpla o no una condición",
            "Para detener la ejecución de la computadora"
        ]
    },
    {
        numb: 13,
        question: "¿Cuándo conviene utilizar una estructura 'switch' o 'según'?",
        answer: "Cuando se evalúa una misma variable contra múltiples valores posibles",
        options: [
            "Cuando se necesita hacer un bucle infinito",
            "Cuando se evalúa una misma variable contra múltiples valores posibles",
            "Cuando solo hay una condición verdadera",
            "Para ordenar arreglos de mayor a menor"
        ]
    },
    {
        numb: 14,
        question: "¿Qué caracteriza al bucle 'for' (para)?",
        answer: "Se usa generalmente cuando se conoce de antemano el número exacto de repeticiones",
        options: [
            "Solo se ejecuta si la condición inicial es falsa",
            "No requiere una condición de parada",
            "Se usa generalmente cuando se conoce de antemano el número exacto de repeticiones",
            "Sirve únicamente para leer archivos de texto"
        ]
    },
    {
        numb: 15,
        question: "¿Cuál es la diferencia entre un bucle 'while' y un 'do-while'?",
        answer: "El 'do-while' ejecuta el bloque de código al menos una vez antes de evaluar la condición",
        options: [
            "El 'while' es más rápido que el 'do-while'",
            "El 'do-while' ejecuta el bloque de código al menos una vez antes de evaluar la condición",
            "El 'while' no usa condiciones lógicas",
            "El 'do-while' solo funciona con números enteros"
        ]
    },
    {
        numb: 16,
        question: "¿Qué es un bucle infinito?",
        answer: "Un ciclo cuya condición de salida nunca se cumple y se repite sin fin",
        options: [
            "Un ciclo que se ejecuta exactamente mil veces",
            "Una función que se llama a sí misma una vez",
            "Un ciclo cuya condición de salida nunca se cumple y se repite sin fin",
            "Un error de conexión a internet"
        ]
    },
    {
        numb: 17,
        question: "¿Qué función cumple una variable 'contador' dentro de un bucle?",
        answer: "Incrementar o decrementar su valor en una cantidad constante en cada iteración",
        options: [
            "Guardar textos largos ingresados por el usuario",
            "Incrementar o decrementar su valor en una cantidad constante en cada iteración",
            "Detener el programa cuando ocurre un error",
            "Convertir números decimales en enteros"
        ]
    },
    {
        numb: 18,
        question: "¿Qué función cumple una variable 'acumulador'?",
        answer: "Sumar o almacenar valores variables a lo largo de las repeticiones de un ciclo",
        options: [
            "Contar cuántos errores tiene el código",
            "Sumar o almacenar valores variables a lo largo de las repeticiones de un ciclo",
            "Reiniciar la memoria del programa",
            "Comparar dos cadenas de texto"
        ]
    },
    {
        numb: 19,
        question: "¿Qué es un arreglo (array) unidimensional o vector?",
        answer: "Una estructura que almacena múltiples elementos del mismo tipo bajo un mismo nombre",
        options: [
            "Una variable que solo guarda un carácter",
            "Una estructura que almacena múltiples elementos del mismo tipo bajo un mismo nombre",
            "Un tipo de bucle condicional",
            "Un operador matemático avanzado"
        ]
    },
    {
        numb: 20,
        question: "En la mayoría de los lenguajes de programación, ¿en qué número empieza el índice de un arreglo?",
        answer: "En 0",
        options: [
            "En 1",
            "En -1",
            "En 0",
            "En 10"
        ]
    },
    {
        numb: 21,
        question: "¿Qué es una matriz en programación?",
        answer: "Un arreglo bidimensional organizado en filas y columnas",
        options: [
            "Un arreglo bidimensional organizado en filas y columnas",
            "Una función sin parámetros",
            "Un archivo ejecutable",
            "Una variable booleana"
        ]
    },
    {
        numb: 22,
        question: "¿Qué es una función o subprograma?",
        answer: "Un bloque de código reutilizable diseñado para realizar una tarea específica",
        options: [
            "El comentario inicial de un programa",
            "Un bloque de código reutilizable diseñado para realizar una tarea específica",
            "Un tipo de dato numérico",
            "La pantalla donde se muestran los resultados"
        ]
    },
    {
        numb: 23,
        question: "¿Qué son los parámetros de una función?",
        answer: "Los datos de entrada que recibe la función para poder operar",
        options: [
            "Los errores que arroja la función al compilar",
            "Los datos de entrada que recibe la función para poder operar",
            "Las librerías externas del lenguaje",
            "Los comentarios dentro del código"
        ]
    },
    
    {
        numb: 24,
        question: "¿Para qué sirve la instrucción 'return' dentro de una función?",
        answer: "Para devolver un valor resultante y finalizar la ejecución de la función",
        options: [
            "Para reiniciar el bucle principal",
            "Para imprimir un mensaje en pantalla",
            "Para devolver un valor resultante y finalizar la ejecución de la función",
            "Para declarar una constante"
        ]
    },
    {
        numb: 25,
        question: "¿Qué es un error de sintaxis?",
        answer: "Una violación a las reglas gramaticales del lenguaje de programación",
        options: [
            "Cuando el programa compila pero da un cálculo matemático incorrecto",
            "Una violación a las reglas gramaticales del lenguaje de programación",
            "Cuando se agota la memoria RAM",
            "Un fallo físico en el teclado"
        ]
    },
     ]