import request from "../request";

// 获取月度任务列表
export const getMonthlyTaskList = (annualId: string) => {
  return request.get(`/api/assess/internal/monthlyTask/list`, {
    params: {
      annualId,
    },
  });
};

// 获取年度计划列表
export const getAnnualTaskList = (opts: object) => {
  return request.get(`/api/assess/internal/annualTask/list`, {
    params: opts,
  });
};

// 导出年度统计数据（文件流）
export const exportStatistic = (data: any) => {
  return request.post(`/api/assess/internal/annualTask/exportStatistics`, data, {
    responseType: "blob",
  });
};

// 新增年度任务
export const addAnnualTask = (data: object) => {
  return request.post(`/api/assess/internal/annualTask/new`, data);
};

// 更新年度任务
export const updateAnnualTask = (data: object) => {
  return request.post(`/api/assess/internal/annualTask/update`, data);
};

// 导入考核任务（上传文件）
export const importAssessmentTask = (params: any, file: any) => {
  const data = new FormData();
  data.append("file", file);
  return request.post(`/api/assess/internal/import`, data, { params });
};

// 创建并发起审批
export const createAndSponsorApprove = (data: object) => {
  return request.post(`/api/assessApprovalOrder/create/sponsorApprove`, data);
};

// 发起审批
export const sponsorApprove = (data: object) => {
  return request.post(`/api/assessApprovalOrder/sponsorApprove`, data);
};

// 修改审批单
export const updateApprovalOrder = (id: string, data: object) => {
  return request.put(`/api/assessApprovalOrder/${id}`, data);
};

// 修改并发起审批
export const updateAndSponsorApprove = (id: string, data: object) => {
  return request.put(`/api/assessApprovalOrder/sponsorApprove/${id}`, data);
};

// 删除审批单
export const deleteApprovalOrder = (id: string) => {
  return request.delete(`/api/assessApprovalOrder/${id}`);
};

// 任务执行查询所有数据（分页）
export const getAllTask = (data: object) => {
  return request.post(`/api/assessTaskOrder/list/page`, data);
};

// 统计指定公司指定状态的任务数
export const getStatusTask = (data: object) => {
  return request.post(`/api/assess/internal/annualTask/queryMapping`, data);
};

// 任务执行修改数据
export const updateTask = (id: string, data: object) => {
  return request.put(`/api/assessTaskOrder/${id}`, data);
};

// 考核任务-执行-发起审批
export const taskSponsorApprove = (data: object) => {
  return request.post(`/api/assessApprovalTask/sponsorApprove`, data);
};

// 编辑详情
export const taskDetail = (id: string) => {
  return request.get(`/api/assessTaskOrder/${id}`);
};

// 查询统计数据
export const getStatistic = (data: object) => {
  return request.post(`/api/assess/internal/annualTask/statistics`, data);
};

// 删除年度任务
export const deleteAnnualTask = (id: string) => {
  const data = new FormData();
  data.append("id", id);
  return request.post(`/api/assess/internal/annualTask/delete`, data);
};


