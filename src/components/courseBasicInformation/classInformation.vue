<template>
    <el-container>

        <el-main>
            <el-form :model="FormData" label-width="100px">
                <el-form-item label="课程名称" prop="courseName">
                    <el-input v-model="FormData.courseName"></el-input>
                </el-form-item>
                <el-form-item label="开设专业">
                    <el-select v-model="FormData.major">
                        <el-option value="计算机科学与技术"></el-option>
                        <el-option value="电子信息工程"></el-option>
                        <el-option value="数据科学与大数据技术"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="任课教师" prop="classroomTeacher">
                    <el-input v-model="FormData.classroomTeacher"></el-input>
                </el-form-item>
                <el-form-item label="理论学时" prop="theoreticalHours">
                    <el-input v-model="FormData.theoreticalHours"></el-input>
                </el-form-item>
                <el-form-item label="实验学时" prop="labHours">
                    <el-input v-model="FormData.labHours"></el-input>
                </el-form-item>
                <el-form-item label="班级名称" prop="className">
                    <el-input v-model="FormData.className"></el-input>
                </el-form-item>
                <el-form-item label="学期" prop="term">
                    <!-- <el-input v-model="FormData.term"></el-input> -->
                    <el-select v-model="FormData.termStart" placeholder="请选择" style="width: 12vh;">
                        <el-option v-for="item in DataOptions" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <span style="margin-left: 1vh;margin-right: 1vh;">至</span>
                    <el-select v-model="FormData.termEnd" placeholder="请选择" style="width: 12vh;">
                        <el-option v-for="item in DataOptions" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <span style="margin-left: 1vh;margin-right: 1vh;"></span>
                    <el-select v-model="FormData.term" placeholder="请选择课程性质">
                        <el-option label="第一学期" value="1"></el-option>
                        <el-option label="第二学期" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所选教材">
                    <el-input v-model="FormData.textBook"></el-input>
                </el-form-item>
                <el-form-item label="学生人数" prop="studentsNum">
                    <el-input v-model="FormData.studentsNum"></el-input>
                </el-form-item>
                <el-form-item label="课程性质" prop="courseNature">
                    <el-select v-model="FormData.courseNature" placeholder="请选择课程性质">
                        <el-option label="必修" value="必修"></el-option>
                        <el-option label="选修" value="选修"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程类别" prop="courseType">
                    <el-select v-model="FormData.courseType" placeholder="请选择课程类别">
                        <el-option value="专业基础课"></el-option>
                        <el-option value="专业特色课"></el-option>
                        <el-option value="专业必修课课"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :inline="true" label="课程目标数量" prop="courseTargetNum" width="80%">
                    <template solt-scope="scope">
                        <el-input v-model="FormData.courseTargetNum"></el-input>
                    </template>
                </el-form-item>
                <el-form-item label="指标点数量" prop="indicatorPointsNum">
                    <el-input v-model="FormData.indicatorPointsNum"></el-input>
                </el-form-item>
                <el-form-item label="指标点编号" prop="indicatorPoints">
                    <!-- <el-input v-model="FormData.indicatorPoints"></el-input> -->
                    <el-select v-model="FormData.indicatorPoints" filterable multiple placeholder="数量与内容请与教学大纲一致！"
                        style="width:100% ;" :multiple-limit="FormData.indicatorPointsNum">
                        <el-option v-for="item in indicators" :key="item.indicatorName" :value="item.indicatorName">
                            <span style="float: left">{{ item.indicatorName }}</span>
                            <span style="margin-left: 1vh; float: left; color: #8492a6; font-size: 13px">
                                {{ item.indicatorContent }}
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span style="color:red">* 注意: 如需修改指标点编号，则必须同步修改课程考核评价方式子项目设置中对应的指标点。</span>


        </el-main>
        <el-footer>
            <el-row style="margin-left: 40%;">
                <el-button type="primary" @click="goto('courseBasicInformation')">返回</el-button>
                <el-button type="danger" @click="modifyMessage()">保存</el-button>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
import api from '@/api/api'
import programObjection from './programObjective.vue'
export default {

    name: "classInformation",
    data() {
        return {
            id: 0,

            FormData: {
                // className: "计算,机科学与技术2020",
                // classroomTeacher: "阳老师",
                // courseName: "高数",
                // courseNature: "必修",
                // courseTargetNum: 5,
                // courseType: "专业必修课",
                // indicatorPoints: "指标1,指标2",
                // indicatorPointsNum: 2,
                // labHours: 4,
                // studentsNum: 80,
                // term: "2022-2023.1",
                // theoreticalHours: 16,
            },
            props: {
                courseTargetNum: {
                    type: Number,
                    Required: true
                }
            },
            showbt: false,
            showObjective: true,
            indicators: [],
            DataOptions: []

        }
    },

    methods: {
        initDataOptions() {
            for (let i = 0; i < 10; i++) {
                this.DataOptions.push(new Date().getFullYear() - 5 + i);
            }
        },
        goto(url) {
            this.$router.push({ path: '/MainPage/' + url });
        },
        settingbegain() {
            this.showbt = true;
            this.showObjective = true
        },
        settingOver() {
            this.showObjective = !this.showObjective;
            this.showbt = false
        },

        getMessage() {
            api.get("/courseInfo/" + this.id, "", (resp) => {
                resp.data.data.indicatorPoints = JSON.parse(resp.data.data.indicatorPoints);
                this.FormData = resp.data.data;
            })
        },
        modifyMessage() {
            this.$confirm('是否提交 ?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.FormData.indicatorPoints = JSON.stringify(this.FormData.indicatorPoints);

                api.put("/courseInfo", this.FormData, (resp) => {
                    if (resp.data.flag) {
                        this.$message({
                            type: 'success',
                            message: '保存成功!'
                        });
                        this.initDataOptions();
                        this.getIndicators();
                        this.getMessage();
                    } else if (resp.status != 200) {
                        this.$message({
                            type: 'error',
                            message: '保存失败!'
                        });
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },

        //获取指标点列表
        getIndicators() {
            api.get("/courseInfo/indicators", "", (resp) => {
                this.indicators = resp.data.data;
            })
        }

    },

    mounted() {
        this.initDataOptions();
        this.getIndicators();
        this.getMessage();
    },
    created() {
        this.id = this.$route.query.id;
    },
}
</script>
   
<style></style>