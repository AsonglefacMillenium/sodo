import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

export type TaskStatus = "pending" | "in_progress" | "done";

export interface TaskAttributes {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

type TaskCreationAttributes = Optional<TaskAttributes, "id" | "status">;

class Task extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes {
  public id!: string;
  public title!: string;
  public description?: string;
  public status!: TaskStatus;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "in_progress", "done"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "Tasks",
    timestamps: true,
  }
);

export default Task;
