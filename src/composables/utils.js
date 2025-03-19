// 消息提示
import 'element-plus/es/components/message/style/css'
import {ElMessage} from "element-plus";


export function showMessage(message = '提示内容', type = 'success', customClass = '') {
    return ElMessage({
        type: type,
        message,
        customClass,
    })
}
