/**
 * @param {string} columnName
 * @param {Array<{[x: string | symbol]: any}>} rows 
 * @returns {[x: string | symbol]: any}
 */
function groupBy(columnName, rows) {
	return rows.reduce((resultRows, row) => ({
		...resultRows,
		[row[columnName]]: [...(resultRows[row[columnName]] ?? []), row]
	}), {})
}
