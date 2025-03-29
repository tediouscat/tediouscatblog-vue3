import axios from "@/axios";

// 获取标签分页数据
export function getTagPageList(data) {
    return axios.post("/admin/tag/list", data)
}

// 添加标签
export function addTag(data) {
    return axios.post("/admin/tag/add", data)
}

// 删除标签
export function deleteTag(id) {
    return axios.post("/admin/tag/delete", {id})
}
