// 动态获取图片路径
export const getAssetsImg = (src) => {
    return new URL(`../assets/images/${src}`, import.meta.url).href
}

export const escapeBrackets = (input)=> {
    return input
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;');
}