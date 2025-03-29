import axios from "@/axios";

// 获取标签分页数据
export function getTagPageList(data) {
    return axios.post("/admin/tag/list", data)
}

// // 添加分类
// export function addCategory(data) {
//     return axios.post("/admin/category/add", data)
// }

// // 删除分类
// export function deleteCategory(id) {
//     return axios.post("/admin/category/delete", {id})
// }
