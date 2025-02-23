import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Chip,
  Paper,
} from "@mui/material";
import { Edit, Download, Delete, CheckCircle } from "@mui/icons-material";
import { formatDate, getStatus } from "../utils";

const TaskTable = ({ tasks, onMarkAsDone, onDownloadFile, onEdit, onDelete }) => {
  console.log("Tasks Data:", tasks); // Debugging log to check the data type

  return (
    <TableContainer component={Paper} sx={{ marginTop: "22px" }}>
      <Table>
        <TableHead>
          <TableRow>
            {["Title", "Description", "Deadline", "Status", "Action"].map((header) => (
              <TableCell key={header} sx={{ fontWeight: "bold" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(tasks) ? (
            tasks.map((task) => (
              <TableRow key={task._id}>
                <TableCell>
                  <Tooltip title={task.title}>
                    <span style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {task.title}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell sx={{ maxWidth: 250 }}>
                  <Tooltip title={task.description}>
                    <span style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {task.description}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {formatDate(task.deadline)}
                  <br />
                  <code>{getStatus(task.deadline, task.status)}</code>
                </TableCell>
                <TableCell>
                  <Chip label={task.status} color={task.status === "DONE" ? "success" : "warning"} />
                </TableCell>
                <TableCell>
                  {task.status === "TODO" && (
                    <Tooltip title="Mark as Done">
                      <IconButton onClick={() => onMarkAsDone(task._id)} aria-label="Mark as done">
                        <CheckCircle color="success" />
                      </IconButton>
                    </Tooltip>
                  )}
                  {task.linkedFile && (
                    <Tooltip title="Download File">
                      <IconButton onClick={() => onDownloadFile(task.linkedFile)} aria-label="Download file">
                        <Download color="primary" />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Tooltip title="Edit">
                    <IconButton onClick={() => onEdit(task)} aria-label="Edit task">
                      <Edit color="secondary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => onDelete(task._id)} aria-label="Delete task">
                      <Delete color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No tasks available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
