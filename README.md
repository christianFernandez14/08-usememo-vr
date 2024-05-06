Trabajando con useMemo

El uso del hook useMemo en el componente Empleados es una buena práctica para optimizar el rendimiento y reducir el consumo de recursos. Sin embargo, es importante comprender su funcionamiento y utilizarlo de manera adecuada para obtener los mejores resultados; es lo que pudimos ver el primer ejercicio de practica del useMemo

Su sintaxis const nombreFuncion = useMemo (() => funcionQueLlevaLaCarga()), [dependencia])

Se utiliza para que no haya problema de rendimientos.