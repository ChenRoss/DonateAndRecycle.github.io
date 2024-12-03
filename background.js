// 初始化擴充功能

// 處理照片分析
async function handlePhotoAnalysis(photoData) {
    try {
        // 在這裡可以添加額外的處理邏輯
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: '相機照片分析器',
            message: '照片分析完成'
        });
    } catch (error) {
        console.error('處理照片時發生錯誤：', error);
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: '相機照片分析器',
            message: '處理照片時發生錯誤'
        });
    }
} 