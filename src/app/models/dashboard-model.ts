export class DashboardModel {
    module_id :number;
    module_nam :string;
    module_image :string
    subModuleList: SubModuleModel[];
}
export class SubModuleModel {
    sub_module_id :number;
    sub_module_nam :string;
    module_id :number;
    controller_nam :string;
    action_nam :string;
    sub_image :string;
}
