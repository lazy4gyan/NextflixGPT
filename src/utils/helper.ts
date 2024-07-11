export function filterImages(array:Record<string,string>[]) {
    return array.filter((item:Record<string,string>) => 
      item.iso_639_1 === "en" && item.file_path.includes(".png")
    );
  }

export const randomAvatarProfileImage = (max:number,min:number)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}