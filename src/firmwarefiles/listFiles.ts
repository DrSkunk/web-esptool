export default async function listFiles() {
  const response = await fetch(
    "https://api.github.com/repos/Fri3dCamp/badge-2020/git/trees/master?recursive=1"
  );
  const data = await response.json();
  const files = data.tree
    .filter(({ path }) => /firmware\/\S*\.zip/.test(path))
    .map(({ path }) => {
      const fileName = path.split("/").pop();
      return {
        fileName,
        url: `https://raw.githubusercontent.com/Fri3dCamp/badge-2020/master/${path}`,
      };
    });
  console.log(files);

  return files;
}
