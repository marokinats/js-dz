/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
		for (var i = 0; i < array.length; i++) {
				fn(array[i], i, array);
		}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
		var newArray = [];

		for (var i = 0; i < array.length; i++) {
				newArray.push(fn(array[i], i, array));
		}

		return newArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
		var result;

		if (initial) {
				result = initial;
				for (var i = 0; i < array.length; i++) {
						result = fn(result, array[i], i, array);					
				}
		} else {
				result = array[0];
				for (var i = 1; i < array.length; i++) {
						result = fn(result, array[i], i, array);
				}
		}

		return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
		delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
		// if (prop in obj) {
		// 		return true;
		// }

		// return	false;
		return prop in obj;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
		// var arrayOfProps = [];

		// for (var prop in obj) {
		// 		arrayOfProps.push(prop);
		// }

		// return arrayOfProps;
		return Object.keys(obj);
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
		// var arrayOfUpperProps = [];

		// for (var prop in obj) {
		// 		arrayOfUpperProps.push(prop.toUpperCase());
		// }

		// return arrayOfUpperProps;
		return Object.keys(obj).map(function(item) {

			return item.toUpperCase();
		})
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from = 0, to = array.length) {
	var slicedArray = [];

	if (to > array.length) {
		to = array.length;
	}

	if (to < 0) {
		to = array.length - to;
	}

	if (from < 0 && from >= -array.length) {
		from = array.length - from;
	}
	if (from < -array.length) {
		from = 0;
	}

	for (var i = from; i < to; i++) {
		slicedArray.push(array(i));
	}

	return slicedArray;

	// if (from && to) {
	// 	if (from >= 0 && to >= 0) {
	// 		for (var i = from; i < array.length; i++) {
	// 			if (i === to) {
	// 				return slicedArray;
	// 			}
	// 			if (i < to) {
	// 				slicedArray.push(array(i));
	// 			}
	// 		}

	// 		return slicedArray;
	// 	}

	// 	if (from <= 0 && to < 0) {
	// 		for (var i = from; i < (array.length - to); i++) {
	// 			if (i === to) {
	// 				return slicedArray;
	// 			}
	// 			if (i > to) {
	// 				slicedArray.push(array(i));
	// 			}
	// 		}

	// 		return slicedArray;
	// 	}
	// }

	// if (!to) {
	// 	if (!from) {
	// 		return slicedArray = array;
	// 	}
	// 	if (from >= 0) {
	// 		for (var i = from; i < array.length; i++) {
	// 			slicedArray.push(array(i));
	// 		}

	// 		return slicedArray;
	// 	}
	// 	if (from < 0) {
	// 		for (var i = from; i > -(array.length); i--) {
	// 			slicedArray.push(array(i));
	// 		}

	// 		return slicedArray;
	// 	}
	// }

		
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
		forEach,
		map,
		reduce,
		deleteProperty,
		hasProperty,
		getEnumProps,
		upperProps,
		slice,
		createProxy
};
