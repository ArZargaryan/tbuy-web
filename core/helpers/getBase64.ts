export function getBase64(file: File) {
  console.log(file);
  if (!file || file.length === 0) return null;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
