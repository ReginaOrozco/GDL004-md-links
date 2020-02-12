//Desde este archivo debes exportar una función (mdLinks)

const checkMd = (filePath) => (path.extname(filePath) === '.md');

const readMd = () => {
  fs.readFile(userPath, 'utf8', (err, data) => {
    if (err);
    
  });
  return true;
};
readMd();

const findLinksMd = () => {
  fs.readFile(userPath, 'utf8', (err, data) => {
    allLinks = data.match(expectLink);
    console.log(allLinks);
  });
  return true
};
findLinksMd();