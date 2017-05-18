const process_argv = process.argv;

process_argv.forEach((elem, index) => {
	console.log(`第${index+1}个参数: ${process_argv[index]}`);
});

module.exports = {
	host: 'localhost'
};