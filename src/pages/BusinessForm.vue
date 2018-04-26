<template>
    <el-form ref="form" :model="form" label-width="80px" height="300px">
        <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- 业务员由系统根据当前登录人员自动填入 -->
        <el-form-item label="客户">
            <el-input v-model="form.customer"></el-input>
        </el-form-item>
        <el-form-item label="目标单数">
            <el-input v-model="form.goal_num"></el-input>
        </el-form-item>
        <el-form-item label="完成单数">
            <el-input v-model="form.complete"></el-input>
        </el-form-item>
        <el-form-item label="目标天数">
            <el-input v-model="form.goal_days"></el-input>
        </el-form-item>
        <el-form-item label="应付金额">
            <el-input v-model="form.payment"></el-input>
        </el-form-item>
        <el-form-item label="已付金额">
            <el-input v-model="form.half_payment"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
            <el-input v-model="form.keywords"></el-input>
        </el-form-item>
        <el-form-item label="店铺名">
            <el-input v-model="form.shop"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="产品图片">
            <el-input v-model="form.pic"></el-input>
        </el-form-item>
<!-- 
        <el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button >取消</el-button>
        </el-form-item> -->
    </el-form>
</template>
<script>
    export default{
        name: 'BusinessForm',
        props: ['form']
    }
</script>