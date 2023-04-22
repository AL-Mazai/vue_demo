<template>
    <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu :default-openeds="['1','1-3']">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message/>
                            </el-icon>
                            导航1
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <el-icon>
                                    <HelpFilled/>
                                </el-icon>
                                导航1.1
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <el-icon>
                                    <Histogram/>
                                </el-icon>
                                导航1.2
                            </el-menu-item>
                        </el-menu-item-group>

                        <el-sub-menu index="1-3">
                            <template #title>
                                <el-icon>
                                    <Avatar/>
                                </el-icon>
                                导航1.3
                            </template>
                            <el-menu-item index="1-3-1">导航1.3.1</el-menu-item>
                            <el-menu-item index="1-3-2">导航1.3.2</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <!--顶部-->
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting/>
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item>退出</el-dropdown-item>
                                <el-dropdown-item>其他</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>蔡伟</span>
                </div>
            </el-header>
            <!--主窗口-->
            <el-main>
<!--                显示用户信息-->
                <el-scrollbar>
                    <el-table :data="users" border style="width: 90%;">
                        <el-table-column prop="userId" label="id"/>
                        <el-table-column prop="userName" label="name"/>
                        <el-table-column label="操作" width="160px">
                            <template #default="scope">
                                <el-button type="primary" style="width: 60px;" @click="editUser(scope.row)">编辑</el-button>
                                <el-button type="danger" style="width: 60px;" @click="delUser(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-scrollbar>
                <!-- 编辑用户对话框 -->
                <el-dialog class="edit-dialog" v-model="editDialogVisible">
                    <!--弹出的用户信息-->
                    <el-form
                        label-width="100px"
                        :model="currentUserData"
                        style="max-width: 460px"
                    >
                        <el-form-item label="userId">
                            <el-input v-model="currentUserData.userId"/>
                        </el-form-item>
                        <el-form-item label="UserName">
                            <el-input v-model="currentUserData.userName"/>
                        </el-form-item>
                    </el-form>
                    <!--编辑框的取消or确认提交-->
                    <div class="dialog-footer">
                        <el-button @click="editDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="submitEditForm">确定</el-button>
                    </div>
                </el-dialog>
            </el-main>

        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "User",
    data() {
        return {
            users: [],
            editDialogVisible: false,
            currentUserData: {
                userId: '',
                userName: '',
            },
        }
    },
    created() {
        this.showUsers()
    },
    methods: {
        showUsers() {
            const vm = this
            axios.get('http://localhost:8084/get').then(function (resp) {
                vm.users = resp.data;
            })
        },
        editUser(user) {
            this.currentUserData = user;
            this.editDialogVisible = true
        },
        delUser() {

        },
        submitEditForm() {
            this.editDialogVisible = false
        }
    }
}

</script>

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.edit-dialog {
    width: 300px;
    height: 400px;
}
</style>
