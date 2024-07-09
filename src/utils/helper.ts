export function filterImages(array:any) {
    return array.filter(item => 
      item.iso_639_1 === "en" && item.file_path.includes(".png")
    );
  }

export const randomAvatarProfileImage = (max:number,min:number)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}