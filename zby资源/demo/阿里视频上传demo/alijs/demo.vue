<el-row>
	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
	  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
	  <el-menu-item index="1" router=>消息中心</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title" router=>我的工作台</template>
	    <el-menu-item index="2-1" router=>选项1</el-menu-item>
	    <el-menu-item index="2-2" router=>选项2</el-menu-item>
	    <el-menu-item index="2-3" router=>选项3</el-menu-item>
	  </el-submenu>
	</el-menu>
</el-row>



handleSelect(key, keyPath) {
    console.log(key, keyPath);
}














