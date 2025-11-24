<template>
    <div class="loading-container">
        <div class="loading-spinner">
            <div class="spinner-ring"></div>
        </div>
        <div class="loading-text">加载中...</div>
    </div>
</template>

<style lang="scss" scoped>
.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
}

.loading-spinner {
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
}

.spinner-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(59, 130, 246, 0.2);
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading-text {
    font-size: 14px;
    color: #6b7280;
    font-weight: 500;
    letter-spacing: 0.5px;
}
</style>