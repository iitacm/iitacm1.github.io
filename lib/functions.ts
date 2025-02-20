// Helper Functions used in the application
import fs from 'fs';
import path from 'path';
import { type BoardMember } from './interfaces';

export const getBoardMembers = (): BoardMember[] => {
    const filePath = path.join(process.cwd(), 'data', 'board_members.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const boardMembers: BoardMember[] = JSON.parse(jsonData);
    return boardMembers;
};